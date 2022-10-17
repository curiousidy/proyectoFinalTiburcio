


export const fecthMovie = async () =>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b79570d592ddbfc38a6a3f2ee0b593fc&language=es-ES&page=1`, 
    {
        method: 'GET',
        credentials: 'same-origin'
    }
        
    );
    const data = await response.json();
    return data;
    }catch (error) {
         console.error(error);

    }
}

export const fecthMovieUpcoming = async () =>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b79570d592ddbfc38a6a3f2ee0b593fc&language=es-ES&page=1`, 
    {
        method: 'GET',
        credentials: 'same-origin'
    }
        
    );
    const data = await response.json();
    return data;
    }catch (error) {
         console.error(error);

    }
}

export const fecthMovieHomeGenre = async () =>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b79570d592ddbfc38a6a3f2ee0b593fc&language=es-Es`, 
    {
        method: 'GET',
        credentials: 'same-origin'
    }
        
    );
    const data = await response.json();
    
    return data;
    }catch (error) {
         console.error(error);

    }
}

export const fecthMovieHomeByGenre = async () =>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b79570d592ddbfc38a6a3f2ee0b593fc&with_genres=*`, 
    {
        method: 'GET',
        credentials: 'same-origin'
    }
        
    );
    const data = await response.json();
    return data;
    }catch (error) {
         console.error(error);

    }
}

