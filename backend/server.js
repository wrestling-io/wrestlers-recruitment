// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Wrestler from './models/wrestler';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri_main'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/wrestlers', (req, res) => {
  Wrestler.find((err, wrestlers) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: wrestlers });
  });
});

router.post('/wrestlers', (req, res) => {
  const wrestler = new Wrestler();
  // body parser lets us use the req.body
  const { first_name, last_name, dob, weight, school } = req.body;
  if (!first_name || !last_name || !dob || !weight || !school) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and wrestler'
    });
  }
  wrestler.first_name= first_name;
  wrestler.last_name = last_name;
  wrestler.dob = dob;
  wrestler.weight = weight;
  wrestler.school = school;
  wrestler.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete('/wrestlers/:wrestlerId', (req, res) => {
  const { wrestlerId } = req.params;
  if (!wrestlerId) {
    return res.json({ success: false, error: 'No wrestler id provided' });
  }
  Wrestler.remove({ _id: wrestlerId}, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
