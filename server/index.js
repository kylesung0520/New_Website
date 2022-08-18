import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
//Connect web app to database (mongodb)
const CONNECTION_URL = 'mongodb+srv://kyle0520:486251pl@cluster0.3my9e.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; //CONNECT TO HEROKU

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('Server running on port : ' + PORT)))
    .catch((error) => console.log(error.message));
