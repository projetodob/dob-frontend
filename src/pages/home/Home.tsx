import "./Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfosHome from "./InfosHome";
import ListaProdutosHome from "../../components/produtos/listaProdutos/ListaProdutoHome";

function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };

  return (
    <>

      <Slider {...settings}>
        <div>
          <InfosHome />
        </div>
        <div>
          <ListaProdutosHome />
        </div>
      </Slider>

    </>
  );
};

export default Home;
