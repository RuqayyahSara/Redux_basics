export function movieslist(){
    return{
        type: "MOVIES_LIST",
        payload:[
            {id: 1, name: "Spider Man"},
            {id: 2, name: "The Hangover"},
            {id:3 , name: "Shutter Island"}
        ]
    };
}