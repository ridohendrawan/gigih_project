const mongoose = require('mongoose');

const videosSchema =new mongoose.Schema(
    {
        url_image:{
            required:true,
            type:String
        },
        products:[
            {
                link_product:{
                    required:true,
                    type:String
                },
                price:{
                    required:true,
                    type:String
                },
                title:{
                    required:true,
                    type:String
                }
            }],
        comments:[{
            username:{type:String},
            comment:{type:String},
            timestamp:{type:Date}
        }]
    }
)

module.exports = mongoose.model('Video',videosSchema);