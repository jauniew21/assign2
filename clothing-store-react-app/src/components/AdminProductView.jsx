import { useState } from 'react'
import Drawer from '@mui/material/Drawer';

const AdminProductView = (props) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <button onClick={toggleDrawer(true)}>Admin</button>
            <Drawer open={open} onClose={toggleDrawer(false)}
            className=''>
                <p>Admin Info</p>
                <p>{props.product.name} Sales Information</p>
                
                <label for="dom_sales">Domestic Sales:</label>
                <input
                    name='dom_sales'
                    type="text"
                    value={props.product.sales.domestic.toFixed(2)}
                />

                <label for="int_sales">International Sales:</label>
                <input
                    name='int_sales'
                    type="text"
                    value={props.product.sales.international.toFixed(2)}
                />

                <label for="tot_sales">Total Sales:</label>
                <input
                    name='tot_sales'
                    type="text"
                    value={props.product.sales.total.toFixed(2)}
                />

                <label for="dom_gross">Domestic Gross:</label>
                <input
                    name='dom_gross'
                    type="text"
                    value={(props.product.sales.domestic * props.product.price).toFixed(2)}
                />

                <label for="int_gross">International Gross:</label>
                <input
                    name='int_gross'
                    type="text"
                    value={(props.product.sales.international * props.product.price).toFixed(2)}
                />

                <label for="total_gross">Total Gross:</label>
                <input
                    name='total_gross'
                    type="text"
                    value={(props.product.sales.total * props.product.price).toFixed(2)}
                />

                <label for="dom_cost">Domestic Cost:</label>
                <input
                    name='dom_cost'
                    type="text"
                    value={(props.product.sales.domestic * props.product.cost).toFixed(2)}
                />

                <label for="int_cost">International Cost:</label>
                <input
                    name='int_cost'
                    type="text"
                    value={(props.product.sales.international * props.product.cost).toFixed(2)}
                />

                <label for="total_cost">Total Cost:</label>
                <input
                    name='total_cost'
                    type="text"
                    value={(props.product.sales.total * props.product.cost).toFixed(2)}
                />

                <label for="dom_profit">Domestic Profit:</label>
                <input
                    name='dom_profit'
                    type="text"
                    value={(props.product.sales.domestic - props.product.cost).toFixed(2)}
                />

                <label for="int_profit">International Profit:</label>
                <input
                    name='int_profit'
                    type="text"
                    value={(props.product.sales.international - props.product.cost).toFixed(2)}
                />

                <label for="total_profit">Total Profit:</label>
                <input
                    name='total_profit'
                    type="text"
                    value={(props.product.sales.total - props.product.cost).toFixed(2)}
                />
            </Drawer>
        </div>
    )
}

export default AdminProductView;