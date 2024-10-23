require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const multer = require('multer');

const PORT = process.env.PORT || 3000;

// DB connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(err);
});
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})