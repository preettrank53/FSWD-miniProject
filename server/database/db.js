import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const DBConnection = async () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@preetrank.smftmfv.mongodb.net/?retryWrites=true&w=majority&appName=PreetRank`;

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Error while connecting to database:', error.message);
    }
};

export default DBConnection;
