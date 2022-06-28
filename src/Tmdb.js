let API_BASE = 'https://api.themoviedb.org/3'
let API_KEY = '8685a60cd5dcaa17601a2c692da5ca33'


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}

export default{

    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInf: async (movieID, type) =>{
        let info = {

        };

        if(movieID){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
                // default:
                //     info = null;
                // break;
            }
        }

        return info
    }
}