import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true},
    aspects: {type: Number, required: true},
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
