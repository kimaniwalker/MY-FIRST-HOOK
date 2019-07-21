const express = require('express');


const testRouter = require('../server/routes/test');
const loginRouter = require('../server/routes/login');

const app = express();
app.use(express.json());

app.use('/api/test', testRouter);
app.use('/api/login', loginRouter);


app.listen(process.env.PORT || '3000' , () => {
    console.log(`Server Is Up & Running on port: ${process.env.PORT || '3000'}`);
});