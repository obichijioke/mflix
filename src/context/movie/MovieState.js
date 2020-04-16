import React, {useReducer} from 'react';
import axios from 'axios'
import movieContext from './movieContext';
import MovieReducer from './movieReducer';
import { SET_DETAILS, SET_TRENDING, SET_LOADING , SET_MOVIELIST, SET_RELATED, SET_SHOWPREVIEW} from '../types'

const MovieState = props => {
    const initialState = {
        trending: [],
        movieDetails:{},
        featured: {},
        movieList:[],
        relateditems:[],
        preview:"",
        featuredVideo:"",
        loading: false,
        showPreview: false
    }

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    //set trending
    const setTrending = async() =>{
        setLoading();
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5a8d140617ee0ca7ca93b93e2c039a50`);
        dispatch({type: SET_TRENDING,
                payload:res.data.results});
        
    }

    //get movie details
    const getMovieDetails = async(id) => {
        setLoading();
        const getdetails = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`);
        const details = getdetails.data;
        const getVideo = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`);
        let videoUrl;
        if(getVideo.data.results.length < 1){
            videoUrl = null;
        }else{
            videoUrl = `https://www.youtube.com/watch?v=${getVideo.data.results[0].key}`;
        }
        
        dispatch({type: SET_DETAILS,
                payload:{one:details, two:videoUrl}});

        setRelated(id);
    }

    //set movieList
    const setMovieList = async() =>{
        setLoading();
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=2020`);
        const item = Math.floor(Math.random() * res.data.results.length);
        const idd = res.data.results[item].id;
        const resSecond = await axios.get(`https://api.themoviedb.org/3/movie/${idd}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`);
        const getVideo = await axios.get(`https://api.themoviedb.org/3/movie/${idd}/videos?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`);
        
        let videoUrl;
        if(getVideo.data.results.length < 1){
            videoUrl = null;
        }else{
            videoUrl = `https://www.youtube.com/watch?v=${getVideo.data.results[0].key}`;
        }
        
        dispatch({type: SET_MOVIELIST,
                payload:{one:res.data.results, two:resSecond.data, three:videoUrl}});
    }

    //set setRelated
    const setRelated = async(id) => {
        
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1`);
        dispatch({type: SET_RELATED,
                 payload:res.data.results});
        
    }

    //setloading
    const setLoading =() => {
        dispatch({type:SET_LOADING});
    }

     //showPreview
     const setShowPreview =(value) => {
         if(value == null){
            dispatch({type:SET_SHOWPREVIEW, payload: true});
         }else{
            dispatch({type:SET_SHOWPREVIEW, payload:value});
    }
    }

    return <movieContext.Provider 
        value={{
                trending:state.trending,
                featured: state.featured,
                movieList:state.movieList,
                preview:state.preview,
                loading:state.loading,
                relateditems:state.relateditems,
                movieDetails:state.movieDetails,
                showPreview:state.showPreview,
                featuredVideo:state.featuredVideo,
                setLoading,
                setTrending,
                setMovieList,
                setRelated,
                getMovieDetails,
                setShowPreview
            }}>
            {props.children}
            </movieContext.Provider>
}

export default MovieState;