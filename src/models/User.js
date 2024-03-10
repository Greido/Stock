const {Schema,model} = require('moongose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name:{type: String,required},
    email:{type: String,required},
    password:{type: String,required}
},{
    timestamps:true
})

userSchema.methods.encryp = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt)
};


userSchema.methods.matchPassword = function  (password) {
    return  bcrypt.compare(password, this.password)

}

module.exports = model('user',userSchema)