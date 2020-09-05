import React from 'react'
import {Link} from 'react-router-dom'
import galaxy from '../../images/galaxy.jpg'

const Card = (props) =>{
    const {title, poster_path, vote_average, release_date, original_name, first_air_date, id, media_type, movie_type, name} = props.carditem;
    return (<div >
        <a href={`/${media_type || movie_type ? media_type || movie_type : 'movie'}/${id}`}>
        <div className='cardItem'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='galaxy' className='hvr-grow'/>
            <h6>{name ? name : (title === undefined ? (original_name.length > 20 ? original_name.slice(0, 20)+'...' : original_name) : (title.length > 20 ? title.slice(0, 20)+'...' : title))}</h6>
            <div>
                <p>{release_date===undefined ? (first_air_date && first_air_date.slice(0,4)) : (release_date && release_date.slice(0,4))}</p>
                <ul>
                    <li><i className="fas fa-heart fa-xs" style={{color:'red'}}></i></li>
                    <li><i className="fas fa-eye fa-xs" style={{color:'red'}}></i></li>
                    <li><i className="fas fa-star fa-xs" style={{color:'rgb(253, 151, 64)'}}></i><p>{vote_average}</p></li>
                </ul>
            </div>
        </div>
        </a></div>
    )
}
export default Card;
