import File from "../models/file.js";

export const uploadImage = async (request, response) => {
    if (!request.file) {
        return response.status(400).json({ error: "No file uploaded" });
    }

    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    };

    try {
        const file = await File.create(fileObj);
        response.status(200).json({ path: `http://localhost:8081/file/${file._id}` });
    } catch (error) {
        console.error("Upload error:", error.message);
        response.status(500).json({ error: error.message });
    }
};

export const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);

        file.downloadContent++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error("Download error:", error.message);
        response.status(500).json({ error: error.message });
    }
};
