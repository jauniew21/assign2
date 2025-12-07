import { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { BarChart } from '@mui/x-charts/BarChart';

const AdminProductView = (props) => {
    const [open, setOpen] = useState(false);
    const product = props.product;

    const metrics = product? 
    [
        {
            label: 'Sales',
            domestic: product.sales.domestic,
            international: product.sales.international,
            total: product.sales.total,
        },
        {
            label: 'Gross',
            domestic: product.sales.domestic * product.price,
            international: product.sales.international * product.price,
            total: product.sales.total * product.price,
        },
        {
            label: 'Cost',
            domestic: product.sales.domestic * product.cost,
            international: product.sales.international * product.cost,
            total: product.sales.total * product.cost,
        },
        {
            label: 'Profit',
            domestic: product.sales.domestic * (product.price - product.cost),
            international: product.sales.international * (product.price - product.cost),
            total: product.sales.total * (product.price - product.cost),
        },
        ]
    : [];


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <button onClick={toggleDrawer(true)}>Admin</button>
            <Drawer open={open} onClose={toggleDrawer(false)}
            className=''>
                <p>Admin Info</p>
                <p>{product?.name} Sales Information</p>
                
                {metrics.map(item => (
                    <div key={item.label}>
                        <p>{item.label}</p>

                        <label>Domestic:</label>
                        <input
                        type="text"
                        value={item.domestic.toFixed(2)}
                        readOnly
                        />

                        <label>International:</label>
                        <input
                        type="text"
                        value={item.international.toFixed(2)}
                        readOnly
                        />

                        <label>Total:</label>
                        <input
                        type="text"
                        value={item.total.toFixed(2)}
                        readOnly
                        />
                    </div>
                    ))}

                    <BarChart
                        xAxis={[
                            {
                            scaleType: 'band',
                            data: metrics.map(m => m.label),
                            },
                        ]}
                        series={[
                            {
                            label: 'Domestic',
                            data: metrics.map(m => Number(m.domestic.toFixed(2))),
                            color: '#facc15', // yellow
                            },
                            {
                            label: 'International',
                            data: metrics.map(m => Number(m.international.toFixed(2))),
                            color: '#3b82f6', // blue
                            },
                            {
                            label: 'Total',
                            data: metrics.map(m => Number(m.total.toFixed(2))),
                            color: '#ef4444', // red
                            },
                        ]}
                        width={650}
                        height={350}
                        />
            </Drawer>
        </div>
    )
}

export default AdminProductView;