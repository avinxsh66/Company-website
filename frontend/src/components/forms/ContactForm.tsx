import { useState } from 'react';
     import { Box, TextField, Button, FormControlLabel, Checkbox, Typography } from '@mui/material';
     import { submitContactForm } from '../../services/api';

     interface FormData {
       name: string;
       email: string;
       message: string;
       demo: boolean;
     }

     function ContactForm() {
       const [formData, setFormData] = useState<FormData>({
         name: '',
         email: '',
         message: '',
         demo: false,
       });
       const [errors, setErrors] = useState<Partial<FormData>>({});
       const [submitted, setSubmitted] = useState(false);
       const [submitError, setSubmitError] = useState<string | null>(null);

       const validate = (): Partial<FormData> => {
         const newErrors: Partial<FormData> = {};
         if (!formData.name.trim()) newErrors.name = 'Name is required';
         if (!formData.email.trim()) newErrors.email = 'Email is required';
         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
         if (!formData.message.trim()) newErrors.message = 'Message is required';
         return newErrors;
       };

       const handleSubmit = async (e: React.FormEvent) => {
         e.preventDefault();
         const newErrors = validate();
         if (Object.keys(newErrors).length > 0) {
           setErrors(newErrors);
           return;
         }
         try {
           await submitContactForm(formData);
           setSubmitted(true);
           setFormData({ name: '', email: '', message: '', demo: false });
           setErrors({});
           setSubmitError(null);
         } catch (error: any) {
           setSubmitError(error.message || 'Failed to submit the form. Please try again later.');
         }
       };

       const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value, type, checked } = e.target;
         setFormData((prev) => ({
           ...prev,
           [name]: type === 'checkbox' ? checked : value,
         }));
         setErrors((prev) => ({ ...prev, [name]: '' }));
         setSubmitError(null);
       };

       if (submitted) {
         return (
           <Typography variant="h6" color="success.main" align="center">
             Thank you for your submission! We'll get back to you soon.
           </Typography>
         );
       }

       return (
         <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
           {submitError && (
             <Typography variant="body2" color="error.main" align="center">
               {submitError}
             </Typography>
           )}
           <TextField
             label="Name"
             name="name"
             value={formData.name}
             onChange={handleChange}
             error={!!errors.name}
             helperText={errors.name}
             fullWidth
           />
           <TextField
             label="Email"
             name="email"
             type="email"
             value={formData.email}
             onChange={handleChange}
             error={!!errors.email}
             helperText={errors.email}
             fullWidth
           />
           <TextField
             label="Message"
             name="message"
             value={formData.message}
             onChange={handleChange}
             error={!!errors.message}
             helperText={errors.message}
             multiline
             rows={4}
             fullWidth
           />
           <FormControlLabel
             control={
               <Checkbox
                 name="demo"
                 checked={formData.demo}
                 onChange={handleChange}
                 color="primary"
               />
             }
             label="Request a Demo"
           />
           <Button type="submit" variant="contained" color="primary">
             Submit
           </Button>
         </Box>
       );
     }

     export default ContactForm;