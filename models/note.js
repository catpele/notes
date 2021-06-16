import { TransformQuery } from 'graphql-tools';
import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    }
});

export default mongoose.model('note', NoteSchema);