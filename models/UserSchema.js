const mongoose=require('mongoose')
var Schema= mongoose.Schema;


const userSchema = new Schema({
          
          firstname: {
              type: String,
              required: true,
          },
         lastname: {
              type: String,
              required: true
          },
         phoneNumber: {
            type: Number,
            required: true
        },
          email: {
            type: String,
            required: true
        },
          adress: {
            type: String,
            required: true
        },
        age:  {
            type: Number,
            required: true
        }
     } );
      
          
      module.exports = mongoose.model("User", userSchema);