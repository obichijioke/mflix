import React from 'react';
import noposter from '../../images/no-movie-poster.jpg'

const EpisodeCard = ({episode}) => {
    const {still_path, name, id, episode_number} = episode;

    return (
        <div className="cardItem" style={{width: 'calc(100% / 6)', position: 'relative', margin:'1rem 0.5rem', minHeight:'0px'}}>
            <img style={{display:'block', left: '0', top:'0', margin:'0rem', borderRadius: '10px', zIndex:'0'}} src={still_path ? `https://image.tmdb.org/t/p/w500/${still_path}` : noposter} alt={name && name}/>
            <div style={{position:'absolute', display:'flex', flexDirection:'column', justifyContent:'space-between', zIndex:'2', left:'0rem', top:'0rem', height:'100%', width:'100%', backgroundColor:'#00000042', paddingLeft:'1rem'}}>
            <h6 style={{color:'#eaeaea', marginTop:'0.5rem'}}>Episode {episode_number}</h6>
            <div>
                <p style={{color:'#eaeaea', marginBottom:'0.4rem'}}>{name}</p>
                <p></p>
            </div>
            </div>
        </div>
    )
}
export default EpisodeCard;