import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import { connect } from 'mongoose';
import connectcloudinary from './configs/cloudinary.js';


// initialize express
const app = express();

// connect to database
await connectDB();
await connectcloudinary();

// middleware
app.use(cors());
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => {
    res.send('API Working');
});

app.post('/clerk',express.json(),clerkWebhooks);

app.use('/api/educator',express.json(),educatorRouter);

// Port
const PORT = process.env.PORT || 2000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
