const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nandana:Nandana123@cluster0.3wzq2lh.mongodb.net/')
.then(() => {
    console.log('db Connected')
})
.catch((err) => {
    console.log(err)
})