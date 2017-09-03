import Express from 'express';

let app = Express();

app.get('/', (req, res) => {
    res.send(`hello yangxu!`);
});

app.listen(4321, () => {
    console.log('server running http://localhost:4321');
});
