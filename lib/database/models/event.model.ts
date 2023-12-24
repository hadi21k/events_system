import { model, Schema, Document, models } from "mongoose"

export interface IEvent extends Document {
    title: string;
    description?: string;
    location: string;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url: string;
    category: {
        _id: String,
        name: String
    },
    organizer: Array<{
        _id: String,
        firstName: String,
        lastName: String,
    }>
}


const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
    startDateTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    endDateTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    price: {
        type: String
    },
    isFree: {
        type: Boolean,
    },
    url: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

const Event = models.Event || model<IEvent>('Event', EventSchema);

export default Event;