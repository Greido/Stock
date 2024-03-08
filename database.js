
const mongoose = require("mongoose")
const NOTES_APP_MONGODB_HOST = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db => console.log('Database is connected'))
    .catch(err=>console.log(err))