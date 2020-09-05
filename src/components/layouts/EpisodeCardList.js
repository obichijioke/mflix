import React, {useEffect, useContext, useState} from 'react';
import EpisodeCard from './EpisodeCard.js';
import Spinner from '../Spinner';
import MovieContext from '../../context/movie/movieContext'

const EpisodeCardList = ({movieId, seasonNum}) => {
    const [fetched, setFetched] = useState(false);
    const movieContext = useContext(MovieContext);
    

    useEffect(()=>{
        getData();
    },[]);
    
    const getData = () => {
        if (fetched === false) {
            movieContext.setEpisodeList(movieId, seasonNum);
            setFetched(true);
        }else{
            return
        }
        
    }

    if(movieContext.episodeList === null){
        return <Spinner/>
    }else{
        return(
            <div style={{display:'flex', flexWrap:'wrap', position:'relative', width:'100%', height:'250px', overflowY:'auto', marginTop:'1rem'}}>
             {movieContext.episodeList && movieContext.episodeList.filter(episode => episode.season_number === seasonNum).map((episode, i) => (
                 <EpisodeCard episode={episode} key={i}/>
             ))}
            </div>
            )
        
    }
}

export default EpisodeCardList;
