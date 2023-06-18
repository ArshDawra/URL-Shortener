const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const urlRoute = require('./routes/urlRoute');
const userRoute = require('./routes/userRoutes');
const app = express();
const PORT = 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use('/url', urlRoute);

mongoose.connect(process.env.DB_LINK).then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(`MongoDB connection failed: ${err}`));

app.listen(PORT, () => console.log('server started'));