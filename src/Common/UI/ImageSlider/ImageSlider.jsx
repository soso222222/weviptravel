import Slider from "react-slick";
import { Slide, Wrapper } from "./styled.ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider({
  list,
  width = "100%",
  height = "100%",
  align = "left",
  dots = true,
  infinite = true,
  arrows = true,
  speed = 500,
  slidesToShow = 3,
  slidesToScroll = 3
}) {
    const settings = {
    dots: dots, // 네비게이션 버튼
    arrows: arrows, // 양 옆 화살표 여부
    infinite: infinite, // 무한반복
    speed: speed, // 슬라이더 넘기는 속도
    slidesToShow: slidesToShow, // 한 화면에 보여줄 요소 개수
    slidesToScroll: slidesToScroll, // 스와이프 시 넘길 요소 개수
  // centerMode: true, // 중앙 정렬
  // autoplay: true, // 자동 시작
  // autoplaySpeed: 3500, // 자동 넘기기 시간
  // pauseOnHover: true, // 마우스 Hover 시 멈춤
  // arrows: false // 넘기기 버튼 
  };

  
  const getAlign = () => {
    switch (align) {
      case "center": 
        return "margin: 0 auto; ";
      case "right": 
        return ".slick-track { margin-right: 0; }";
      default: // left
        return ".slick-track { margin-left: 0; }";
    }
  };
    return (
        <Wrapper width={arrows ? `calc(${width} - 50rem)` : width} height={dots ? `calc(${height} + 25rem)` : height} aglign={getAlign()}>
          <Slider {...settings}>
            {list?.map((url, idx) => (
              <div key={idx}>
                  <Slide height={height} src={`/images/${url}`}/>
              </div>
            ))}
          </Slider>
        </Wrapper>
    );
}

export default ImageSlider;
