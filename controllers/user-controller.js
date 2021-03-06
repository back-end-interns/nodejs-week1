// You dont have a user.js file inside service folder
const {createUser, signIn, allUser} = require('../services/user');
const bcrypt = require('bcrypt');
const json = require("jsonwebtoken");
const {secret} = require('../config/token')

exports.createUser = async (req, res) => {
    try{
        var { password, username } = req.body;
        bcrypt.hash(password, 10).then(async hash => {
        password = hash;
        const body = { password, username };
        const response = await createUser(body);
        res.status(200).send({message: "Successfully created!", status: response})
        })
    }catch(err){
        throw Error(err);
    }
}

exports.signInUser = async (req, res) => {

    // you have to insert this inside try and catch

    const { username, password } = req.body;
    
    await signIn({ where: { username }})
    .then(data => {
        if(!data){
            return res.status(500).send({ message: "User not found!"})
        }

        const validPassword = bcrypt.compareSync(
            password,
            data.password
        )

        if(!validPassword){
            return res.status(500).send({message: "Invalid Password"})
        }

        var token = json.sign({ id: data.id }, secret, {
            expiresIn: 86400
        })

        res.status(200).send({ token });
    })
}

// why is your try and catch outside the function ?
try{

    // I cant find alluser function in your services
    // I dont understand your code here 
    // what does allUser do ?
    console.log(req.id);
    const response = await allUser();
    res.status(200).send({response});
}catch(err){
    throw Error(err);
}