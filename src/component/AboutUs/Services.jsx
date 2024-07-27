import React from 'react'
import './Services.css'
import Navbar from '../Navbar'
import Loading from '../loader/loading'
import { useState,useEffect } from 'react'
import Footer from '../Footer'
function Services() {
    let messege = 'there are many variation of passages of lorem ipsum available but the \n majority have suffered alteration in some injected humour.'
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fakeDataFetch = () =>{
            setTimeout(() => {
                setIsLoading(false)
             },4000);
            }


            fakeDataFetch()
    },[])
  return isLoading?(
    <Loading/>
    ) : (
    
    <section className='section-white'>
        <Navbar/>
        <div className='container'>
            
            <div className='row'>
                

                <div className='col-md-12 text-center'>
                    <h2 className='section-title'>
                        The Team Behind Pacifico
                    </h2>
                    <p className='section-subtitle'>{messege}</p>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic'/>
                        <h3>Trung Quan</h3>
                        <div className='team-info'>
                            <p>Head Of CEO</p>
                            <p>Trung Quan make product and home page</p>

                            <ul className='team-icon'>
                            <li>
                                        <a href='https://x.com/' className='twitter' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>

                                <li>
                                        <a href='https://www.pinterest.com/' className='pinterest' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-pinterest'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/' className='facebook' target='_blank' rel='noopener noreferrer'> 
                                    <i className='fa fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic'/>
                        <h3>Cong Huyen</h3>
                        <div className='team-info'>
                            <p>Head Of CEO</p>
                            <p>make video team</p>

                            <ul className='team-icon'>
                            <li>
                                        <a href='https://x.com/' className='twitter' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>

                                <li>
                                        <a href='https://www.pinterest.com/' className='pinterest' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-pinterest'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/' className='facebook' target='_blank' rel='noopener noreferrer'> 
                                    <i className='fa fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg' className='team-img' alt='pic'/>
                        <h3>Dat Phu</h3>
                        <div className='team-info'>
                            <p>Head Of CEO</p>
                            <p>make blog, gallery and contact page</p>

                            <ul className='team-icon'>
                                <li>
                                        <a href='https://x.com/' className='twitter' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>

                                <li>
                                        <a href='https://www.pinterest.com/datphu180305/' className='pinterest' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-pinterest'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/profile.php?id=100053293230672' className='facebook' target='_blank' rel='noopener noreferrer'> 
                                    <i className='fa fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic'/>
                        <h3>tan an</h3>
                        <div className='team-info'>
                            <p>Head Of CEO</p>
                            <p>make login and aboutus</p>

                            <ul className='team-icon'>
                            <li>
                                        <a href='https://x.com/' className='twitter' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>

                                <li>
                                        <a href='https://www.pinterest.com/' className='pinterest' target='_blank' rel='noopener noreferrer'>
                                        <i className='fa fa-pinterest'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/' className='facebook' target='_blank' rel='noopener noreferrer'> 
                                    <i className='fa fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Services