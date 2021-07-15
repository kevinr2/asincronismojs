const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data =>{
        console.log(data.info.count);
        return fetchData(`${APi}${data.result[0].id}`)
    })
    .then(data =>{
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data =>{
        return fetchData(data.dimension)
    })
    .catch(err => console.error(err))