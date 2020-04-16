import { SET_PREVIEW, SET_TRENDING, SET_LOADING, SET_MOVIELIST, SET_RELATED, SET_DETAILS, SET_SHOWPREVIEW} from '../types'

export default (state, action) => {
    switch(action.type){
        case SET_TRENDING:
            return{
                ...state,
                trending: action.payload,
                loading: false
            }
            case SET_MOVIELIST:
                return{
                    ...state,
                    movieList: action.payload.one,
                    featured: action.payload.two,
                    featuredVideo: action.payload.three,
                    loading: false
                }
            case SET_RELATED:
                return{
                    ...state,
                    relateditems: action.payload,
                    loading: false
                }
            case SET_DETAILS:
                return{
                    ...state,
                    movieDetails: action.payload.one,
                    preview: action.payload.two,
                    loading: false
                }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case SET_SHOWPREVIEW:
            return{
                ...state,
                showPreview: action.payload
            }
        default:
            return state;
    }
}