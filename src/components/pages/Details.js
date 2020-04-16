import React,{useContext, useEffect} from 'react'
import VideoPlayer from '../../components/layouts/VideoPlayer';
import MovieContext from '../../context/movie/movieContext';
import RelatedItems from '../layouts/RelatedItems';

const Details = (props) => {
    const movieContext = useContext(MovieContext);

    useEffect(()=>{
        movieContext.getMovieDetails(props.match.params.name);
        setTimeout(function(){
            
            videoCheck();
            
        }, 5000)
       
    }, [])

    const videoCheck = () =>{

        if(movieContext.preview === null){
             console.log('no preview movie');
        }else{
            movieContext.setShowPreview()
        }
    }
    return (
        <div className='details-page'>
            {!movieContext.showPreview ? <img style={{height:'95vh', width:'100vw'}} src={`https://image.tmdb.org/t/p/original/${movieContext.movieDetails.backdrop_path}`} alt=""></img> : <VideoPlayer videoUrl={movieContext.preview}/>}
            
            
            <div className='container'>
                <RelatedItems/>
            </div>
        </div>
    )
}

export default Details;