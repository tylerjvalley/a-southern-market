const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//cors and bodyparser middleware
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

//db config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDb successfully connected'))
    .catch((err) => console.log('MongoDB error:', err));


    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server running on port ${port}`));