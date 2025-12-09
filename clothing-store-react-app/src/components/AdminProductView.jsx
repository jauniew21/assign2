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
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    className: 'bg-black text-gray-100 w-[720px] p-6',
                }}
                >
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Admin Info</h2>
                    <p className="text-sm text-gray-400">
                    {product?.name} — Sales Overview
                    </p>
                </div>

                <div className="space-y-4">
                    {metrics.map(item => (
                    <div
                        key={item.label}
                        className="border border-gray-700 rounded-lg p-4"
                    >
                        <h3 className="font-semibold text-lg mb-3">
                        {item.label}
                        </h3>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-yellow-400 font-medium">Domestic</p>
                            <p className="mt-1">
                            ${item.domestic.toFixed(2)}
                            </p>
                        </div>

                        <div>
                            <p className="text-blue-400 font-medium">International</p>
                            <p className="mt-1">
                            ${item.international.toFixed(2)}
                            </p>
                        </div>

                        <div>
                            <p className="text-red-400 font-medium">Total</p>
                            <p className="mt-1">
                            ${item.total.toFixed(2)}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
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
                        color: '#facc15',
                        },
                        {
                        label: 'International',
                        data: metrics.map(m => Number(m.international.toFixed(2))),
                        color: '#3b82f6',
                        },
                        {
                        label: 'Total',
                        data: metrics.map(m => Number(m.total.toFixed(2))),
                        color: '#ef4444',
                        },
                    ]}
                    width={650}
                    height={350}
                    />
                </div>
            </Drawer>
        </div>
    )
}

export default AdminProductView;