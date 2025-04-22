import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        required: false,
        default: 0
    }
});

const File = mongoose.model("file", FileSchema);

export default File;
