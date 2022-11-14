const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

let ArticleDATA = mongoose.model('articledetail',ArticleSchema)

module.exports = ArticleDATA