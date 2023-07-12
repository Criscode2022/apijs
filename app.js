const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar todas las solicitudes CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.get('/saludo', (req, res) => {
    const name = req.query.name || 'Amigo';
    res.send(`¡Hola, ${name}!`);
});

app.get('/nombre_completo', (req, res) => {
    const name = req.query.name || 'Amigo';
    const surname = req.query.surname || 'Desconocido';
    res.send(`¡Hola, ${name} ${surname}!`);
});

app.get('/html', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Página desde Express</title>
        </head>
        <body>
            <h1>¡Hola desde Express!</h1>
        
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />
            <img src="https://picsum.photos/200/300" alt="" />



        </body>
        </html>
    `);
});


app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
