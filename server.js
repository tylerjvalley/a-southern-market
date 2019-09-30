const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');


const users = require('./routes/api/users');
const vendors = require('./routes/api/vendors');
const items = require('./routes/api/items');

const app = express();

//cors and bodyparser middleware
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

//for parsing uploads folder
app.use('/uploads', express.static('uploads'))

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

//db config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDb successfully connected'))
    .catch((err) => console.log('MongoDB error:', err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/vendors', vendors);
app.use('/api/items', items);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));