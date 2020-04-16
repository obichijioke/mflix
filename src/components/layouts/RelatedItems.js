import React,{useContext} from 'react'
import Spinner from '../Spinner';
import Cards from './Cards'
import MovieContext from '../../context/movie/movieContext'

const RelatedItems = () => {
    
        const movieContext = useContext(MovieContext);
        if(movieContext.loading){
            return <Spinner/>
        }else{
            return (
        <div className='container cardContainer'>
            {movieContext.relateditems.map((item, i) =>(
                <div key={i} style={{width:'calc(100% / 5)', minHeight:'300px', display:'block'}}>
                    <Cards carditem={item} />
                </div>
            ))}
        </div>
    )
        }
    
}

export default RelatedItems;

