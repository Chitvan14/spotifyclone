
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2a2fe2a1cfce42759374384f5a339ffd";

// privacy important 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;

    },{});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


// export const loginUrlSimplified =  "https://accounts.spotify.com/authorize?client_id=2a2fe2a1cfce42759374384f5a339ffd&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
