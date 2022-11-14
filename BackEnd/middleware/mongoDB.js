const mongoose = require("mongoose")  //db 
mongoose.connect("mongodb+srv://Hazeena:Strong3,.@cluster0.2yh1tlc.mongodb.net/blog",{
    useNewUrlParser: true,    //oro policy pole:false kodutha a package onum ithil accept akoola
useUnifiedTopology: true  //to enable new features of mongodb
})
    .then(() => {
        console.log('mongoDB connected successfully')
})
    .catch((err) => {
        console.log("mongoDB not connected" + err);
});