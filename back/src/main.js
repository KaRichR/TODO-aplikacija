import express from 'express';
import session from 'express-session';
import crypto from "crypto";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

// @ Database
import runDB from './db.js';

// @ Routes
import authRoutes from './routes/auth/auth.js';
import listRoutes from './routes/list/mainList.js';
import taskRoutes from './routes/task/mainTask.js';


const password = process.env.PASSWORD

const app = express();
const port = 3000
const sessionSecret = crypto.randomBytes(64).toString('hex');

runDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(bodyParser.json());

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use('/api/auth', authRoutes);
app.use('/api/list', listRoutes);
app.use('/api/task', taskRoutes);

  
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})