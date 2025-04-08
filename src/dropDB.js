const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to IndianRailways DB 🛤️')

  return mongoose.connection.dropDatabase()
}).then(() => {
  console.log('IndianRailways database dropped 🔥')
  mongoose.disconnect()
}).catch((err) => {
  console.error('Error dropping DB ❌', err)
  mongoose.disconnect()
})
