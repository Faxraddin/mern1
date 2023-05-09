const User = require('../models/user')

const test = (req,res) => {
    res.json('test is working')
}

const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body

        if (!name) {
            return res.json({
                error: 'name is required'
            })
        }
        if (!password) {
            return res.json({
                error: 'password is required'
            })
        }

        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error:'already taken'
            })
        }

        const user = await User.create({
            name,email,password
        })
        return res.user(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = test
module.exports=registerUser