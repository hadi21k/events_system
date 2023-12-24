import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

const User = models.User || model('User', UserSchema);

export default User;