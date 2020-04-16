import React,{useContext} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from '../../context/movie/movieContext'
import SliderContainer from '../SliderContainer';
import MoviesList from '../layouts/MoviesList';


const Trending = ()=> {
  const movieContext = useContext(MovieContext);
    
    return (
        
        <div className='trending'>
            <ul className='container row trending-titles'>
                <li><h3><i className="fas fa-chart-line"></i>Trends Now</h3></li>
                <li><p><i className="fas fa-fire-alt"></i>Popular</p></li>
                <li><p><i className="fas fa-star"></i>Premieres</p></li>
                <li><p><i className="fas fa-plus"></i>Recently Added</p></li>
            </ul>
            <div className='checkboxes-container container'>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox" />
                        <span className="button checkmark">one</span>
                    </label>
                    <label className='button-checkbox'>
                        <input type="checkbox"/>
                        <span className="button checkmark">one</span>
                    </label>
            </div>
            <div style={{position:'relative'}}>
            <SliderContainer/>
            </div>
            
            <div>
            <ul className='container row trending-titles'>
            <li><h3><i className="fas fa-chart-line"></i>Trends Now</h3></li>
            <li><p><i className="fas fa-fire-alt"></i>Popular</p></li>
            <li><p><i className="fas fa-star"></i>Premieres</p></li>
            <li><p><i className="fas fa-plus"></i>Recently Added</p></li>
        </ul>
        <div className='checkboxes-container container'>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox" />
                    <span className="button checkmark">one</span>
                </label>
                <label className='button-checkbox'>
                    <input type="checkbox"/>
                    <span className="button checkmark">one</span>
                </label>
        </div>
        
        <MoviesList/>
        
        </div>
        </div>
    )
}

export default Trending;