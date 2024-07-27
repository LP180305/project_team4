import { Col, Container, Form, Pagination, Row } from "react-bootstrap"
import { message, Slider, Spin } from 'antd';
import { useState } from "react";
import '../style.scss'
import Navbar from "../../component/Navbar";
import CardProductComponent from "../../component/cardProductComponent/CardProductComponent";
import Footer from "../../component/Footer";
const ProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(200000000);
    const [messageApi, contextHolder] = message.useMessage();
    const onChange  = (e) => {
        setMinValue(e[0])
        setMaxValue(e[1])
    }
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('carts')))
    const addProduct = (data) => {
        console.log('data', data)
        setLoading(true)
        const productExists = cart.find(item => item.id === data.id);

        let updatedCart;
        if (productExists) {
            updatedCart = cart.map(item =>
                item.id === data.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            const newProduct = {
                id: (cart.length + 1),
                img: data?.img,
                img1: data?.img1,
                img2: data?.img2,
                img3: data?.img3,
                ticket: data?.ticket,
                time: data?.time,
                content: data?.content,
                address: data?.address,
                price: data?.price,
                quantity: 1
            }
            updatedCart = [...cart, newProduct];
        }
        setCart(updatedCart);
        localStorage.setItem('carts', JSON.stringify(updatedCart));
        
        setTimeout(() => {
            setLoading(false)
            messageApi.open({
                type: 'success',
                content: 'Add product success',
            });
        }, 2000);

    };
    const product = JSON.parse(localStorage.getItem('products'))
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number); 
    }
    return(
        <>
        {contextHolder}
        <Spin spinning={loading} fullscreen>
        </Spin>
        <Navbar loading={loading}/>
        <br />
        <Container>
            <Row >
                <Col className="bg-body-tertiary" xs={3}>
                    <h2>Australia</h2>
                    
                    <h3>Number of days</h3>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} >1-3 days</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}>4-7 days</Col>
                    </Row>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} > 8-14 days</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}>Over 14 days</Col>
                    </Row>
                    <h3>
                    Date of department</h3>
                    <input type="date" />
                    <h3>
                    Amount of people</h3>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} >1 people</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}>2 peoples</Col>
                    </Row>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} >3-5 peoples</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}>5+ peoples</Col>
                    </Row>
                    <h3>TOUR LINE</h3>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} >High-class</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}>Standard</Col>
                    </Row>
                    <Row>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}} >Save</Col>
                        <Col className="text-center m-2 p-2" style={{boxShadow:"0 2px 0 #e2f3ff;",border:"1px solid #000",borderRadius:"5px", background:"#fff"}}> Good price<table></table></Col>
                    </Row>
                    <Slider
                        range={{
                        draggableTrack: true,
                        }}
                        max={200000000}
                        defaultValue={[0, 200000000]}
                        tooltip={{ open: false }}
                        onChange={onChange}
                    />
                    <p className="text-center">{formatNumber(minValue)}đ-{formatNumber(maxValue)}đ</p>
                    <h3>Shipping Information</h3>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Promotion"
                        />
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Availability"
                        />
                    </Form>
                </Col>
                <Col>
                    <h1 className="text-center">Travels</h1>
                    <hr />
                    <div className="layOutProduct mt-4">
                        <Row>
                            <Col md={5} className="align-self-center">We have found 4,216 tours for you.</Col>
                            <Col md={{ span: 6, offset: 1 }} className="align-self-center" style={{display:"flex", alignItems:"center"}}>Sorted by
                                <Form.Select aria-label="Default select example" style={{marginLeft:"10px"}}>
                                    <option>All</option>
                                    <option value="1">Package tour</option>
                                    <option value="2">Family tour</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <br />
                        <Row lg={3}>
                            {product?.map((data,index)=>{
                                return(
                                    <Col key={`product${index}`}>
                                        <CardProductComponent addProduct={addProduct} data={data}/>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}} className="mt-3">
                        <Pagination >
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item >{2}</Pagination.Item>
                            <Pagination.Item >{3}</Pagination.Item>
                            <Pagination.Item >{4}</Pagination.Item>
                            <Pagination.Item >{5}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item >{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </Col>
            </Row>
        </Container>
        <br />
            <Footer />
        </>
    )
}   
export default ProductPage