var userModel = require('../models/models');

const getUsers = async(req, res) => {
    try {
        let users = await userModel.find({});
        if(users) {
            res.json(users);
        }
    }
    catch(err) {
        console.log(err);
    }
}

const getUser = async(req, res) => {
    try{
        let user = await userModel.findById(req.params.id);
        if(user) {
            res.json(user);
        }
    }
    catch(err) {
        console.log(err);
    }
}

const createUser = async(req, res) => {
    try {
        let newUser = await userModel.create({
            name: req.body.name,
            age: req.body.age,
            location: req.body.location,
            designation: req.body.designation
        });

        let createUser = newUser.save();
        if(createUser) {
            res.send("User created successfully")
        }
    }
    catch(err) {
        console.log(err)
    }
};

const updateUser = async(req, res) => {
    try {
        let user = await userModel.findByIdAndUpdate(req.params.id, req.body);
        if(user) {
            res.send("User updated successfully")
        }
    }
    catch(err) {
        console.log(err)
    }
};

const deleteUser = async(req, res) => {
    try {
        let user = await userModel.findByIdAndDelete(req.params.id);
        if(user) {
            res.send("User deleted successfully");
        }
    }
    catch(err) {
        console.log(err)
    }
};

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};