import { useState } from 'react'
import Drawer from '@mui/material/Drawer';

const AdminProductView = (props) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return(
        <div>
            <button onClick={toggleDrawer(true)}>Admin</button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                poopyhead
            </Drawer>
        </div>
    )
}

export default AdminProductView;