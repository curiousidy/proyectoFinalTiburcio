


export const fecthMovie = async () =>{
    // return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b79570d592ddbfc38a6a3f2ee0b593fc&language=es-ES&page=1`,
    //     {
    //         method:'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             // 'Authorization': `Basic ${data}` ,
    //         }
           
    //     }).then(res => res.json());
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