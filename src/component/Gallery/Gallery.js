import React, { useState, useEffect } from "react";  
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loading from "../loader/loading";  
import Img1 from '../img/img1.jpg';  
import Img2 from '../img/img2.jpg';  
import Img3 from '../img/img3.jpg';  
import Img4 from '../img/img4.jpg';  
import Img5 from '../img/img5.jpg';
import Img6 from '../img/img6.jpg';
import Img7 from '../img/img7.jpg';  
import './Gallery.css';  
import CloseIcon from '@mui/icons-material/Close';  

const Gallery = () => {  
    // State để lưu trữ ảnh meow upload  
    const [images, setImages] = useState([]);  
    const [model, setModel] = useState(false);  
    const [tempimgSrc, setTempImgSrc] = useState('');  
    const [isLoading, setIsLoading] = useState(true);  

    const data = [  
        { id: 1, imgSrc: Img1 },  
        { id: 2, imgSrc: Img2 },  
        { id: 3, imgSrc: Img3 },  
        { id: 4, imgSrc: Img4 },  
        { id: 5, imgSrc: Img5 }, 
        { id: 5, imgSrc: Img6 }, 
        { id: 5, imgSrc: Img7 }, 
    ];  

    const getImg = (imgSrc) => {  
        setTempImgSrc(imgSrc);  
        setModel(true);  
    }  

    const handleImageChange = (event) => {  
        const files = Array.from(event.target.files);  
        const newImages = files.map(file => URL.createObjectURL(file));  
        setImages(prevImages => [...prevImages, ...newImages]);  
        event.target.value = ''; // Đặt lại giá trị input để cho phép chọn lại cùng một file   
    }  

    useEffect(() => {  
        const fakeDataFetch = () => {  
            setTimeout(() => {  
                setIsLoading(false)  
            }, 4000);  
        }  

        fakeDataFetch();  
    }, []);  

    return isLoading ? (  
        <Loading />  
    ) : (  
        <>  
            <Navbar/>
            <div className={model ? "model open" : "model"}>  
                <img src={tempimgSrc} />  
                <CloseIcon onClick={() => setModel(false)} />  
            </div> 

            <div style={{ textAlign: 'center' }}>  
                <h1 className="gallery-font">Gallery</h1>  
                <input  
                    className="chose-font"
                    type="file"  
                    accept="image/*"  
                    onChange={handleImageChange}  
                    multiple  
                    style={{ margin: '10px 0px',justifyContent:'center' }}  
                > 
                </input>  
                
                <div className="Gallery" >  
                    {/* Hiển thị hình ảnh upload */}  
                    {images.map((image, index) => (  
                        <div key={index} className="pics" onClick={() => getImg(image)}>  
                            <img   
                                src={image}   
                                alt={`upload-${index}`}   
                                style={{ width: '100%' }}   
                            />  
                        </div>  
                    ))}  
                </div>  
            </div>  

             

            <div className="Gallery">  
                {/* Hiển thị hình ảnh từ data */}  
                {data.map((item, index) => {  
                    return (  
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>  
                            <img src={item.imgSrc} style={{ width: '100%' }} />  
                        </div>  
                    )  
                })}  
            </div> 
            <Footer/>
        </>  
    )  
}  

export default Gallery;