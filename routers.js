const express = require('express');
const axios = require ('axios');
const app = express();
const PORT = 3000;

app.use(express.json());


//rota do index

app.get('/', async(req, res)=>{
    const mensagem ={
        mensagem1: 'Bem vindo ao servidor de APIs!',
        mensagem2: 'Digite /post para acessar a API dos posts',
        mensagem4: 'Digite /comments para acessar a API dos comments',
        mensagem5: 'Digite /albums para acessar a API dos albums',
        mensagem6: 'Digite /photos para acessar a API das photos',
        mensagem7: 'Digite /todos para acessar as APIs',
        mensagem8: 'Digite /users para acessar a API dos users'
    }
    res.json(mensagem);
})



//rota dos "posts"
app.get('/posts', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/posts')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error:'Erro! Não foi possível acessar a API'});
    }
});

//rota dos "comments"

app.get('/comments', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/comments')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Não foi possível acesaar a APi'})
    }
})


//rota dos "albums"

app.get('/albums', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/albums')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Não foi possível acessar a API'});
    }
});


//rota das "photos"

app.get('/photos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/photos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Não foi possível acessar a API'});
    }
});

//rota de "todos"

app.get('/todos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/todos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Não foi possível acessar a API'});
    }
});


//rota dos "users"

app.get('/users', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Não foi possível acessar a API'});
    }
});


// iniciar o server

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})