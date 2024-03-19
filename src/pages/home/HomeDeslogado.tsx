import "./Home.css";
import "./HomeDeslogado.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeDeslogadoPage2 from "./HomeDeslogadoPage2";
import HomeDeslogadoPage3 from "./HomeDeslogadoPage3";
import HomeDeslogadoPage1 from "./HomeDeslogadoPage1";

function HomeDeslogado() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <div><HomeDeslogadoPage1 /></div>
        <div><HomeDeslogadoPage2 /></div>
        <div><HomeDeslogadoPage3 /></div>
      </Slider>
    </>
  );
}
export default HomeDeslogado;
