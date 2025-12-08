import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const AboutView = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        // Basic Material UI Modal: https://mui.com/material-ui/react-modal/
        <div>
            <button onClick={handleOpen}
            className='border-none bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded'>
                About</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                About Us
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    We are Jaunie and Michelle and this our second assignment in COMP 4513 - Advanced Web Development. We've made a basic store page using React and Tailwind. 
                    There are several views, both immediately visible (see header) and hidden (admin only).<br />
                    
                    MaterialUI was used to create all modals (including this one) and charts. And DaisyUI was used to create the carousel on the Home Page. <br />

                    Github Repo: https://github.com/jauniew21/assign2/tree/main
                </Typography>
            </Box>
            </Modal>
        </div>)
    }

export default AboutView;