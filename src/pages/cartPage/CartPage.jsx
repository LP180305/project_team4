import { Col, Container, Row } from "react-bootstrap"
import { RiDeleteBin6Line } from "react-icons/ri";
import './style.scss'
import '../style.scss'
import { message, Spin } from "antd";
import { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
const CartPage=()=>{
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('carts')))
    const [loading, setLoading] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();
    let totalPrice = 0
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    const formatNumber = (number) => {
        if (typeof number !== 'number' || isNaN(number)) {
          return 0;
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
        const handleQuantityChange = (id,event) => {
            setLoading(true)
            let updatedCart;
            const newQuantity = Number(event.target.value); // Chuyển đổi giá trị thành số
            updatedCart = cart.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            );
            localStorage.setItem('carts', JSON.stringify(updatedCart));
            setTimeout(() => {
                setLoading(false)
                messageApi.open({
                    type: 'success',
                    content: 'Add product success',
                });
            }, 500);
        };
      const handleRemove = (id) => {
        setLoading(true)
        const updatedCart = cart.filter(item => item.id !== id);
        console.log('updatedCart', updatedCart)
        localStorage.setItem('carts', JSON.stringify(updatedCart));
        setTimeout(() => {
            setLoading(false)
            messageApi.open({
                type: 'success',
                content: 'remove product success',
            });
        }, 2000);
      }
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('carts')))
    },[loading])

    return(
        <>
            {contextHolder}
            <Spin spinning={loading} fullscreen></Spin>
            <Navbar loading={loading}/>
            <br />
            <Container>
                <h2 className="text-center">Cart list</h2>
                <Row style={{borderBottom:"1px solid #d5d5d5",padding:"10px",marginBottom:"10px"}}>
                    <Col md={2}className="text-center">Image</Col>
                    <Col md={4} className="text-center">Name</Col>
                    <Col md={2} className="text-center">Price</Col>
                    <Col md={1} className="text-center">Ticket number</Col>
                    <Col md={2}className="text-center">Total amount</Col>
                    <Col md={1} className="text-center">Act</Col>
                </Row>
                {cart?.map((data,index)=>{
                    totalPrice+=data?.price*data?.quantity
                    return(
                        <Row key={`cart-${index}`} style={{borderBottom:"1px solid #d5d5d5",padding:"10px",marginBottom:"10px"}}>
                            <Col style={{display:"flex",alignItems:"center"}} md={2}><img src={data?.img} alt="" /></Col>
                            <Col style={{display:"flex",alignItems:"center"}} md={4}><b>{data?.content}</b></Col>
                            <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={2}>{formatNumber(data?.price)}₫</Col>
                            <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={1} ><input onChange={(event)=>handleQuantityChange(data?.id,event)} type="number" style={{maxWidth:"40px",textAlign:"center"}} defaultValue={data?.quantity}/></Col>
                            <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={2}>{formatNumber(data?.price*data?.quantity)} ₫</Col>
                            <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={1}><span onClick={()=>handleRemove(data?.id)}> <RiDeleteBin6Line  style={{color:"red",cursor:"pointer", fontSize: "20px"}}/></span></Col>
                        </Row>
                    )
                })}


                <h2 className="text-center">Total amount: <b>{formatNumber(totalPrice)} đ</b></h2> 
                <hr />

                <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
                    <div style={{width:"400px"}}>
                        <h2 className="text-center">
                        Billing Information</h2>
                        <p style={{display:"flex",justifyContent:"space-between"}}><label >Tên</label> <input type="text" placeholder="Enter name" /></p>
                        <p style={{display:"flex",justifyContent:"space-between"}}><label >Email</label> <input type="email" placeholder="Enter Email" /></p>
                        <p style={{display:"flex",justifyContent:"space-between"}}><label >Address</label> <input type="text" placeholder="Enter the address"/></p>
                        <p style={{display:"flex",justifyContent:"space-between"}}><label >Phone number</label> <input type="text" placeholder="Enter your phone number"/></p>
                        <p style={{display:"flex",justifyContent:"space-between"}}><label >Payment</label> 
                         <select className="payment"> 
                            <option>Cash</option>
                            <option>Online Banking</option>
                        </select>
                        </p>
                    </div>
                    <button className="btn btn-primary">
                        <Link to="/payment">Confrim</Link>
                    </button>
                </div> 
            </Container>
            <br />
            <Footer />
        </>
    )
}   
export default CartPage