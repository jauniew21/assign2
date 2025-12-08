import { PieChart } from '@mui/x-charts/PieChart'
import { Link } from 'react-router-dom';

const DashboardView = (props) => {
    const topSell = [...props.products].sort((a, b) => { return b.sales.total - a.sales.total })
    const topProfit = [...props.products].sort((a, b) => { return (b.sales.total * b.price) - (a.sales.total * a.price) })

    const categoryTotals = props.products.reduce((acc, prod) => {

        if (!acc[prod.category]) {
            acc[prod.category] = {
                category: prod.category,
                totalSales: 0,
                totalProfit: 0
            }
        }

        acc[prod.category].totalSales += prod.sales.total ?? 0;
        acc[prod.category].totalProfit += (prod.sales.total * prod.price) ?? 0;

        return acc
    }, {})

    const sortedCategory = Object.values(categoryTotals).sort((a, b) => b.totalProfit - a.totalProfit)

    const categoryPie = (Object.entries(categoryTotals)).map(([category, data]) => ({
        id: category,
        value: data.totalSales,
        label: category
    }))

    const genderSales = props.products.reduce((acc, prod) => {
        if (!acc[prod.gender]) {
            acc[prod.gender] = {
                gender: prod.gender,
                totalSales: 0
            }
        }

        acc[prod.gender].totalSales += prod.sales.total ?? 0;
        return acc
    }, {})

    const genderSalesData = Object.entries(genderSales).map(([gender, data]) => ({
        id: gender,
        value: data.totalSales,
        label: gender
    }));


    return (<div>
        <p className='font-bold pt-16'>Sales Dashboard</p>
        <div className='grid grid-flow-row grid-cols-2 grid-auto-rows gap-y-8'>
            <div>
                <p className='font-bold'>Top 10 Selling Products</p>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Gender</th>
                        <th>Category</th>
                        <th>Total Sales (#)</th>
                    </tr>
                    {topSell.slice(0, 10).map(p => {
                        return (<tr>
                            <td>
                                <Link to={`/product/${p.name}`} key={p.name} style={{ color: "white", fontWeight: "normal" }}>{p.name}</Link>
                            </td>
                            <td>{p.gender}</td>
                            <td>{p.category}</td>
                            <td>{p.sales.total}</td>
                        </tr>)
                    })}
                </table>
            </div>
            <div>
                <p className='font-bold'>Top 10 Profitable Products</p>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Gender</th>
                        <th>Category</th>
                        <th>Total Sales (#)</th>
                        <th>Profit ($)</th>
                    </tr>
                    {topProfit.slice(0, 10).map(p => {
                        return (<tr>
                            <td>
                                <Link to={`/product/${p.name}`} key={p.name} style={{ color: "white", fontWeight: "normal" }}>{p.name}</Link>
                            </td>
                            <td>{p.gender}</td>
                            <td>{p.category}</td>
                            <td>{p.sales.total}</td>
                            <td>${(p.sales.total * p.price).toFixed(2)}</td>
                        </tr>)
                    })}
                </table>
            </div>
            <div className=''>
                <p className='font-bold'>Sales + Profit by Category</p>
                <div className='justify-center'>
                    <table className=''>
                        <tr>
                            <th>Category</th>
                            <th>Sales $</th>
                            <th>Profit $</th>
                        </tr>
                        {sortedCategory.map((p) => (
                            (<tr key={p.category}>
                                <td>{p.category}</td>
                                <td>{p.totalSales}</td>
                                <td>${p.totalProfit.toFixed(2)}</td>
                            </tr>)
                        ))}
                    </table>
                </div>

            </div>
            <div className='flex flex-row'>
                <div className=''>
                    <p className='font-bold'>Sales Numbers by Gender</p>
                    <div className=''><PieChart series={[
                        { data: genderSalesData }
                    ]}
                        width={200}
                        height={200} /></div>
                </div>
                <div>
                    <p className='font-bold'>Sales Numbers by Category</p>
                    <PieChart series={[
                        { data: categoryPie }
                    ]}
                        width={200}
                        height={200} />
                </div>
            </div>
        </div>
    </div>)
}

export default DashboardView;