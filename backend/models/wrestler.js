import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const WrestlerSchema = new Schema({
  first_name: String,
  last_name: String,
  dob: String,
  weight: String,
  school: String,
  accomplishments: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Wrestler', WrestlerSchema);
