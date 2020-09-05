import React,{useContext, useEffect} from 'react'
import ReactPlayer from 'react-player';
import MovieContext from '../../context/movie/movieContext'

const VideoPlayer = (props) => {
    const movieContext = useContext(MovieContext);
    useEffect(() => {
        if (props.videoUrl === null){
            movieContext.setShowPreview(false);
        }else{
            movieContext.setShowPreview();
        }
        
    }, [])

    function handleEnded ()  {
        console.log('onEnded')
        movieContext.setShowPreview(false);
      }
      
    
    return (
        <div className='player-wrapper'>
        <ReactPlayer onEnded={handleEnded} className='react-player' width='100%'
        height='95%' url={props.videoUrl} playing />
        </div>
    )
}

export default VideoPlayer;