import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// Replace process.env.URI with your local MongoDB URI
const localURI = 'mongodb://localhost:27017/intern';

mongoose.connect(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Use default export
export default mongoose;
