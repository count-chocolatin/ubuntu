import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   name: { 
      type: String,
      required: true
   },
   email: {
     type: String,
     required: true,
     unique: true
   },
   password: {
     type: String,
     required: true
   },
   role: {
    type: String,
    default:'user'
   },
   root: {
    type: Boolean,
    default: false
   },
   avatar: {
    type: String,
    default: 'https://res.cloudinary.com/dfh7dqq82/image/upload/v1615407960/sample.jpg'
   }
}, {
         timestamps: truekñk
})

let Dataset = mongoose.model.user || mongoose.model('user', userSchema)
export default Datasetlñkñkññ
pjñjkñjksdsdsd
dfgdfgfggdfmodificado para otro branche2

git par a otro commit cambio de rach main


