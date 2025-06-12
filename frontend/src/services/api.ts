import axios from 'axios';

     const API_URL = 'http://localhost:3000';

     export const submitContactForm = async (formData: { name: string; email: string; message: string; demo: boolean }) => {
         try {
             const response = await axios.post(`${API_URL}/contact`, formData);
             console.log('API Response:', response.data); // Log the successful response
             return response.data;
         } catch (error: any) {
             console.error('API Error:', {
                 message: error.message,
                 response: error.response?.data,
                 status: error.response?.status,
                 headers: error.response?.headers,
             }); // Log detailed error
             throw new Error(error.response?.data?.message || 'Failed to submit contact form');
         }
     };