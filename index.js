import cors from "cors";
import express from 'express';
var { graphqlHTTP } = require('express-graphql');
import mongoose from 'mongoose';
import schema from './schema';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/notetaking_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const app = express();
const PORT = 4300;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Scriptd API v1'
    });
});

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
);

app.listen(PORT, () => {
    console.log(`Server is listening here: http://localhost:${PORT}/graphql`);
});