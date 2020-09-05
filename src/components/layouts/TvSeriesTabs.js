import React, {useContext} from 'react';
import { Tabs } from 'antd';
import EpisodeCardList from './EpisodeCardList.js';
import MovieContext from '../../context/movie/movieContext';
import Casts from './Casts';
const TabPane = Tabs.TabPane;


const TvSeriesTabs = () => {
    const movieContext = useContext(MovieContext);
    const {movieDetails} = movieContext;
    return (
      <div style={{backgroundColor:'#1d212e', marginTop:'0.5rem', padding:'2rem 0'}}>
        <Tabs
          defaultActiveKey="0"
          tabPosition='left'
          style={{ height: 350 }}
        >
        <TabPane tab={<h6 style={{color: 'white', width:'150px', textAlign:'left', marginLeft:'3rem'}}>Details</h6>} key="0">{<div style={{paddingRight:'2rem'}}><h5>Overview</h5><p>{movieDetails.overview && movieDetails.overview.slice(0, 200)+'...'}</p><Casts/></div>}</TabPane>
        {movieDetails.seasons && movieDetails.seasons.map((season, i)=>(
            <TabPane tab={<div><h6 style={{color: 'white', width:'150px', textAlign:'left', marginLeft:'3rem'}}>{season.name}</h6><p style={{color: '#8e8e8e', width:'150px', textAlign:'left', marginLeft:'3rem'}}>{season.air_date && season.air_date.slice(0, 4)}</p></div>} key={i+1}>
             <h4>{season.name && season.name}</h4>
            <div style={{width:'100%', paddingRight:'2rem'}}>{season.overview && season.overview.slice(0, 200)+'...'}
            <EpisodeCardList movieId={movieDetails.id} seasonNum={season.season_number}/>
            </div>
            </TabPane>
        ))}
          
        </Tabs>
      </div>
    );
  
}

export default TvSeriesTabs;