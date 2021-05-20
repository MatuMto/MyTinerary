const mongoose = require('mongoose')
require('dotenv').config()

// mongoose.connect('mongodb+srv://matumoto14:matucrack@cluster0.ezroj.mongodb.net/mytinerary?retryWrites=true&w=majority', {
mongoose.connect(process.env.MONGO, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useFindAndModify: false,
})
.then(()=>console.log("conecté con la base de datooos"))

.catch(error => console.log(error))






