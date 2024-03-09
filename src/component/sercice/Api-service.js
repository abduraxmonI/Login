const axios = require('axios');
const BASE_URI = 'https://marvelstefan-skliarovv1.p.rapidapi.com/getCharacters'
const options = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '567b2a9ec6msh89b5941da38fdcep14983cjsn033e3e93d135',
        'X-RapidAPI-Host': 'Marvelstefan-skliarovV1.p.rapidapi.com'
    }
};



export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}


