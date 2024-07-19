import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ModalComponent = ({ open, handleClose, iframeSrc }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '800px',
        height: '100%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        '@media (max-width: 600px)': {
          width: '100%',
          height: '100%',
        },
      }}>
        <IconButton
          sx={{ 
            position: 'absolute', 
            top: 8, 
            left: 8, 
            color: '#ff6341', // Orange color
            zIndex: 1,
            fontSize: '2rem' // Make the button larger
          }}
          onClick={handleClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <iframe
          src={iframeSrc}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            margin: 0,
            padding: 0,
          }}
          title="Modal Content"
        ></iframe>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
