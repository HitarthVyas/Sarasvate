'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Use a relative path or the public folder
const bgImage = '/Home/tech.webp'; // For public folder images

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Add handleSubmit

  const onSubmit = (data) => {
    console.log(data); // You can replace this with actual submission logic
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      sx={{
        backgroundImage: `url(${bgImage})`,  // Use the imported image or correct path
        backgroundSize: 'cover',             // Ensure it covers the whole area
        backgroundPosition: 'center',        // Center the image
        backgroundAttachment: 'fixed',       // Make it fixed
        backgroundRepeat: 'no-repeat',       // Prevent image repetition
        backgroundColor: '#f5f5f5',          // Fallback color in case image doesn't load
      }}
    >
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
          maxWidth: '600px', // Limit the width
          width: '100%',     // Make it responsive
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
          Fill the form to get a <span style={{ color: '#f50057' }}>no-obligation consultation</span>
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" gutterBottom>
          Your questions and requests are always welcome
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}> {/* Added handleSubmit */}
          {/* Name and Company Name in one row */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                sx={{ mt: 2 }} // Add consistent margin-top
              />
            </div>
            <div className="w-full md:w-1/2">
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                {...register('companyName')} // No validation for this field
                sx={{ mt: 2 }} // Add consistent margin-top
              />
            </div>
          </div>

          {/* Email and Phone Number in one row */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email address'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                sx={{ mt: 2 }} // Add consistent margin-top
              />
            </div>
            <div className="w-full md:w-1/2">
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                {...register('phone', { 
                  required: 'Phone Number is required', 
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter a valid 10-digit phone number'
                  }
                })}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
                sx={{ mt: 2 }} // Add consistent margin-top
              />
            </div>
          </div>

          {/* Message Field */}
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            {...register('message', { required: 'Message is required' })}
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ''}
            sx={{ mt: 2 }} // Add consistent margin-top
          />

          {/* Submit Button */}
          <Box mt={2}>
            <Button
              type="submit"  // Changed back to submit to trigger validation
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default FormComponent;
