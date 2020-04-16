import React,{useContext} from 'react'
import Cards from './layouts/Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from '../context/movie/movieContext'
import Spinner from './Spinner';

 
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        
        style={{background: "linear-gradient(to left, rgb(0, 0, 0), rgba(67, 67, 67, 0.07))", position:'absolute', width:'10%', height:'100%', right:'0', top:'0', textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',zIndex:'1',
                justifyContent: 'center', cursor:'pointer'}}
        onClick={onClick}
      ><i className="fas fa-chevron-right"></i></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        
        style={{background: "linear-gradient(to right, rgb(0, 0, 0), rgba(67, 67, 67, 0.07))", position:'absolute', width:'10%', height:'100%', textAlign: 'center',top:'0',
                display: 'flex',
                flexDirection: 'column',zIndex:'1',
                justifyContent: 'center', cursor:'pointer'}}
        onClick={onClick}
        ><i className="fas fa-chevron-left"></i></div>
    );
  }

const SliderContainer = ()=> {
  const movieContext = useContext(MovieContext);
    var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
            initialSlide: 0,
            arrows:true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }
              ]
      };

      
        if(movieContext.trending===[]){
            return <Spinner/>
        }else{
            return <div className='trending'>
                    
            <div style={{position:'relative'}}>
            <Slider {...settings}>
                {movieContext.trending.map((item, i) =>(
                        <Cards key={item.id} carditem={item}/>
                    ))}
            </Slider>  
            </div>
      
        </div>
        }
}

export default SliderContainer;