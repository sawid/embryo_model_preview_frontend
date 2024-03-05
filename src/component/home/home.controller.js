import axios from "axios";
import env from "react-dotenv";

export const predictInceptionV3 = async (imagePath) => {
    return await axios.post(
        env.REACT_APP_API + "/predict_inception",
        {
            image_path: imagePath,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export const predictXception = async (imagePath) => {
    return await axios.post(
        env.REACT_APP_API + "/predict_xception",
        {
            image_path: imagePath,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};


export const uploadToCloudinary = async (file) => {
    try {
      const cloudName = env.CLOUDINARY_CLOUD_NAME; // Replace with your Cloudinary cloud name
      const unsignedUploadPreset = 'my_unsigned_preset'; // Replace with your Cloudinary unsigned upload preset
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', unsignedUploadPreset);
  
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      );

      // Assuming the response contains the Cloudinary upload result
      return response.data;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error; // You can handle the error further or let the calling code handle it
    }
  };