import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ZeffyModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', // Width for larger screens
        maxWidth: '800px', // Max width to ensure it's not too wide
        height: '90%', // Height for larger screens
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 600px)': {
          width: '100%', // Full width for smaller screens
          height: '100%', // Full height for smaller screens
          p: 2, // Padding adjustment for smaller screens
        },
      }}>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          src="https://www.zeffy.com/embed/ticketing/63199576-2e24-49e2-9fe1-499849096770?modal=true"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="Zeffy Form"
        ></iframe>
      </Box>
    </Modal>
  );
};

export default ZeffyModal;