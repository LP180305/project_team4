import Navbar from "../Navbar";
import Hero from "../Hero";
import Destination from "../Destination";
import Footer from "../Footer";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Home() {
  return (
    <>
      <Navbar />
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
            heroImg="https://cdn.cnn.com/cnnnext/dam/assets/181010115316-australia-best-beaches---neds-full-169.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://awayandfar.com/wp-content/uploads/2019/05/Whitehaven-Beach.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://www.travelinsurancedirect.com.au/blog/wp-content/uploads/2019/05/GettyImages-1217993813-2121x1000.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://bigseventravel.com/wp-content/uploads/2019/10/Cottesloe-Beach-Perth--1024x576.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            cName="hero"
            heroImg="https://bigseventravel.com/wp-content/uploads/2019/10/broome.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <SwiperSlide>
        <Hero
          cName="hero"
          heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          buttonText="Detail Plan"
          url="/products"
          btnClass="show"
        />
      </SwiperSlide>
      <Destination />
      <Footer />
    </>
  );
}
export default Home;
