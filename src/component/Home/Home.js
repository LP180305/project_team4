import Navbar from '../Navbar'
import Hero from "../Hero";
import Destination from "../Destination";
import Footer from "../Footer";
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Loading from "../loader/loading"
import { useEffect, useState } from 'react';
function Home() {
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
    <>
      <Navbar/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
        
      </Swiper>
      <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
          />
        </SwiperSlide>
      <Destination />
      <Footer />
    </>
  );
}
export default Home;
