import mongoose from 'mongoose';
const { Schema } = mongoose;

const dreamSchema = new Schema({
    dream: {
        type: String,
        required: true // Assuming dreams are required
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define the 'Dream' model using the schema
const Dream = mongoose.model('Dream', dreamSchema);

export default Dream;
