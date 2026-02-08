const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
    email: {type: String,unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const Admin = new Schema({
    email: {type: String,unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const Courses = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const Purchases = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const userModel = mongoose.model("users",Users);
const adminModel = mongoose.model("admins",Admin);
const courseModel = mongoose.model("courses",Courses);
const purchaseModel = mongoose.model("purchases",Purchases);

module.exports = {
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}

