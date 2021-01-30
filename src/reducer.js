export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after done with app (permission to ask for login)
    // token: 'BQBRAuIwJbFLL6PI0-TN99QpxWMOAZywyLE2RWCvGgw2nhOC64XS8ntj8uTz2xv0g6blwYx1mVoO-Umqb-bVaMuC5ezbLV8k2Upl9vjirGYFXFdIZ0g8gN5hQ_ZPMf0_51g4u2MCiTtZieYK4XIHkjFbc8A',


};


const reducer=(state , action)=>{
console.log(action);

//todo1 listening data
switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        };

    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token,

        };

    case 'SET_PLAYLISTS':
        // keep current state but just change the playlist
        return{
            ...state,
            playlists:action.playlists,

        };
    
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly : action.discover_weekly ,
        }    
    


        default:
            return state;
}
}

export default reducer;