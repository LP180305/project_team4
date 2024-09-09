import { Col, Container, Row } from "react-bootstrap"
import { BsTicket } from "react-icons/bs";
import icon0 from "../../assets/imgs/icon0.webp"
import icon1 from "../../assets/imgs/icon1.webp"
import icon2 from "../../assets/imgs/icon2.webp"
import icon3 from "../../assets/imgs/icon3.webp"
import icon4 from "../../assets/imgs/icon4.webp"
import icon5 from "../../assets/imgs/icon5.webp"
import icon6 from "../../assets/imgs/icon6.webp"
import '../style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import icon7 from "../../assets/imgs/icon7.webp"
import './style.scss'
import { Navigation } from 'swiper/modules';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { message, Spin } from "antd";
import Navbar from "../../component/Navbar";
import CardProductComponent from "../../component/cardProductComponent/CardProductComponent";
import Footer from "../../component/Footer";
const ProductDetailPage = () =>{
    const location = useLocation();
    const { data } = location.state || {};
    const [loading, setLoading] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    const  formatNumber = (number) =>{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      const [cart,setCart] = useState(JSON.parse(localStorage.getItem('carts')))
      const addProduct = (data) => {
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
    return(
        <>
            {contextHolder}
            <Spin spinning={loading} fullscreen></Spin>
            <Navbar loading={loading}/>
            <br />
            <div style={{background:"#f9f9f9"}}>
                <Container >
                    <div className="headerProductdetail">
                        <div>
                            <span><BsTicket /> {data?.ticket}</span>
                            <h2 style={{textAlign: "justify"}}>{data?.content}</h2>
                        </div>
                        <div>
                            
                            <div >
                                
                                <button className="buttonCommonProduct detailProduct mt-2">Contact us</button>
                            </div>
                        </div>
                    </div>
                    <Row className="layoutImg">
                        <Col md={7}>
                            <img src={data?.img} alt="" />
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col>
                                    <img src={data?.img1} alt="" />
                                </Col>
                                <Col>
                                    <img src={data?.img2} alt="" />
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <img src={data?.img3} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="inforTour mt-4 mx-2">
                        <Col md={5} >
                            <div style={{background:"#fff",borderRadius:"10px",padding:"10px"}}>
                                <p>Depart <span> 15/07/2024 - Departure time: 05:07</span></p>

                                <p>Concentrate <span> 04:07 on 15/07/2024</span></p>

                                <p>Time<span> 2 days</span></p>

                                <p>Departure Point<span> Ho Chi Minh City</span></p>

                                <p>Number of seats available<span> 9 </span></p>
                            </div>
                            <p className="mt-2">Need support?</p>
                            <div >
                                <button className="contact"><FiPhone style={{fontSize:"40px"}} />Free internet calls</button>
                                <button className="mail"><CiMail style={{fontSize:"40px"}} />Submit a support request now</button>
                            </div>
                        </Col>
                        <Col md={7}>
                            <Row className="px-2" xs={4}>
                                <Col className="px-2"md={3}>
                                    <img src={icon0} alt="" />
                                    <h3>Time</h3>
                                    <p>2 Days 1 Night</p>
                                </Col>
                                <Col className="px-2"md={3}>
                                    <img src={icon1} alt="" />
                                    <h3>Transportation</h3>
                                    <p>Car</p>
                                </Col>
                                <Col className="px-2"md={3}>
                                    <img src={icon2} alt="" />
                                    <h3>Attractions</h3>
                                    <p>SYDNEY – CANBERRA CAPITAL – MELBOURNE</p>
                                </Col>
                                <Col className="px-2"md={3}>
                                    <img src={icon3} alt="" />
                                    <h3>Gastronomy</h3>
                                    <p>Breakfast buffet, According to the menu</p>
                                </Col> 
                                <Col className="px-2"md={3}>
                                    <img src={icon4} alt="" />
                                    <h3>Hotel</h3>
                                    <p>3-star hotels </p>
                                </Col>
                                <Col className="px-2"md={3}>
                                    <img src={icon5} alt="" />
                                    <h3>Ideal time</h3>
                                    <p>All year round</p>
                                </Col>
                                <Col className="px-2"md={3}>
                                    <img src={icon6} alt="" />
                                    <h3>Niche Audience</h3>
                                    <p>Couples, Multigenerational Families, Youth, Children</p>
                                </Col>
                            
                                <Col className="px-2"md={3}>
                                    <img src={icon7} alt="" />
                                    <h3>Incentives</h3>
                                    <p>Included in the tour price</p>
                                </Col>
                            </Row>
                            <hr />
                        </Col>
                    </Row>
                </Container>
                <br /><br />
            </div>
            <Container>
                <h3>Highlight</h3>
                <div style={{background:"#f9f9f9"}}>
                    <ul style={{borderRadius:"10px", padding:"20px 40px"}}>
                        <li><b>Sydney </b>Sydney is a port city located in the southeast of Australia. It is Australia's largest, most famous and oldest city. Sydney is also the capital of the state of New South Wales and Australia's most populous city with a population of over 6,000,000 (2016). Located on the southeast coast of Australia, the city was founded in 1788 at Sydney Cove by Arthur Phillip who led the First Fleet from England. Built around Jackson Harbour with its famous scenic beauty, the city of Sydney is known as the "Harbour City". It is Australia's largest financial centre and also a tourist destination for international visitors, famous for its many beautiful beaches and double architecture: the Sydney Opera House and the Sydney Harbour Bridge.</li>
                        <li className="mt-2"><b>Melbourne </b> Melbourne is one of the most livable cities in the world, when it comes to this city, one cannot help but think of the economic development, the most modern life and countless majestic natural wonders here. And it's no surprise that Melbourne is among the top cities that attract the most tourists in the world. With an area of about 9,900 km, Melbourne is not only an important commercial and financial center of the Asia-Pacific region but also takes on the role of the cultural capital of the country, the birthplace of cinema and Australian-style impressionist painting.</li>
                        <li className="mt-2">Been to <b> Maru Koala park</b> Maru Wildlife Park is privately owned by the Heffer family and has been established for 30 years. There is not only a zoo but also a mini golf course and a gourmet restaurant. The park is located on the Bass Highway in the southern Victorian town of Grantville, just a 15-minute drive from Phillip Island. Besides, there are kangaroos, wallaby kangaroos or rare albino animals. In addition, there is also a kangaroo or Tasmanian devil native to Australia. The staff in the park are dedicated to spending hours introducing and explaining to visitors about the different types of animals and their customs.</li>
                    </ul>
                </div>
                <h3>Related Places</h3>
                <Swiper 
                     slidesPerView={4}
                     loop={true}
                     spaceBetween={20}
                     navigation={true} modules={[Navigation]}
                     className="mySwiper"
                >
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProductComponent data={data}/>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <br />
            <Footer />
        </>
    )
}
export default ProductDetailPage