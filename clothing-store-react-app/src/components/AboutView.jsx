import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
            <Link onClick={handleOpen}
            className='border-none bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded'>
                About</Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={{ ...style, position: 'relative' }}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 8,
                        right: 8,
                    }}
                    >
                    <CloseIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                About Us
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    We are Jaunie and Michelle and this our second assignment in COMP 4513 - Advanced Web Development. We've made a basic store page using React and Tailwind. 
                    There are several views, both immediately visible (see header) and hidden (admin only). The user is assumed an Admin for practicality reasons. <br />
                    <br />
                    If you log yourself out, email: 123@gmail.com, and password: 123. Yes, I did do a Cryptography class, thanks for asking.
                    <br /> <br />
                    
                    MaterialUI was used to create all modals (including this one) and charts. And DaisyUI was used to create the carousel on the Home Page. <br />
                    <br />

                    Github Repo: https://github.com/jauniew21/assign2/tree/main
                </Typography>
                <div className="flex justify-end mt-6">
                <button
                    onClick={handleClose}
                    className="text-red-500 font-semibold"
                >
                    Close
                </button>
                </div>
                            </Box>
                            </Modal>
        </div>)
    }

export default AboutView;