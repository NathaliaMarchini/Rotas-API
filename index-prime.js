// import a biblioteca
const axios = require('axios');

// URL api que queremos acessar
const  apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//Requisição HTTP GET API usando axios
axios.get(apiUrl)
    .then((response)=>{
        //Exiba os dados retornados no console
        console.log( "Dados do Api:",response.data);
    })
    .catch((error)=>{
        //Em caso de erro, exiba o erro no onsole
        console.error('Erro ao acessar a API:', error)
    });