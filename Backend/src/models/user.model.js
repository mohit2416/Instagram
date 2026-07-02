const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exist."],
        required: [true, "Username is required"]
    },

    email: {
        type: String,
        unique: [true, "Email already exist"],
        required: [true, "Email is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    bio: String,

    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/pry3f27fx/user-profile-icon-circle_1256048-12499.avif?updatedAt=1771388927303"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel