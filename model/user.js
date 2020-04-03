const mongoose = require('mongoose')
require('dotenv').config()

console.log(process.env.url_mongo);

mongoose.connect(String(process.env.url_mongo), {
  useNewUrlParser: true,
  reconnectTries: 30,
  keepAlive: true,
  reconnectInterval: 500, // Reconnect every 500ms
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
})

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id_user: {type: Number, required: true},
  nama: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  no_telp: {type: String, required: true}
}, { collection: 'user' })

const userDatabase = mongoose.model('user',userSchema)

module.exports = {
  userDatabase
}