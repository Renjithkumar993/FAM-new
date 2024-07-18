import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EventpartcipationModal = ({ open, handleClose }) => {
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
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__ms6nf9URU1EN0RLRzBZVVJOWUo3U0k3Mk1FSTNIUS4u&embed=true"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="Join Us Form"
        ></iframe>
      </Box>
    </Modal>
  );
};

export default EventpartcipationModal;
