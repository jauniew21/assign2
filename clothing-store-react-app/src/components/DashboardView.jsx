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
        <p className='font-bold pt-16 text-xl'>Sales Dashboard</p>
        <div className='grid grid-flow-row grid-cols-2 grid-auto-rows gap-y-8'>
            <div className='grid justify-center'>
                <p className='font-bold pb-2'>Top 10 Selling Products</p>
                <table className='table-fixed border-collapse border'>
                    <tr className='border bg-neutral-700'>
                        <th className='border px-2'>Product Name</th>
                        <th className='border px-2'>Gender</th>
                        <th className='border '>Category</th>
                        <th className='px-2'>Total Sales (#)</th>
                    </tr>
                    {topSell.slice(0, 10).map(p => {
                        return (<tr className='border'>
                            <td className='border px-2'>
                                <Link to={`/product/${p.name}`} key={p.name} style={{ fontWeight: "normal" }} >{p.name}</Link>
                            </td>
                            <td className='border px-2'>{p.gender}</td>
                            <td className='border px-2'>{p.category}</td>
                            <td className='border'>{p.sales.total}</td>
                        </tr>)
                    })}
                </table>
            </div>
            <div className='grid justify-center'>
                <p className='font-bold pb-2'>Top 10 Profitable Products</p>
                <table className='border border-collapse table-fixed'>
                    <tr className='border bg-neutral-700'>
                        <th className='border' >Product Name</th>
                        <th className='border'>Gender</th>
                        <th className='border'>Category</th>
                        <th className='border px-2'>Total Sales (#)</th>
                        <th>Profit ($)</th>
                    </tr>
                    {topProfit.slice(0, 10).map(p => {
                        return (<tr className='border'>
                            <td className='border px-2'>
                                <Link to={`/product/${p.name}`} key={p.name} style={{ fontWeight: "normal" }}>{p.name}</Link>
                            </td>
                            <td className='border px-2'>{p.gender}</td>
                            <td className='border px-2'>{p.category}</td>
                            <td className='border'>{p.sales.total}</td>
                            <td className='border px-2'>${(p.sales.total * p.price).toFixed(2)}</td>
                        </tr>)
                    })}
                </table>
            </div>
            <div className='grid grid-cols-3 col-span-2'>
                <div className='grid justify-center'>
                    <p className='font-bold'>Sales + Profit by Category</p>
                    <div className=''>
                        <table className='border table-fixed'>
                            <tr className='border bg-neutral-700'>
                                <th className='border'>Category</th>
                                <th className='border px-2'>Sales $</th>
                                <th className='border'>Profit $</th>
                            </tr>
                            {sortedCategory.map((p) => (
                                (<tr key={p.category} className='border'>
                                    <td className='border px-2'>{p.category}</td>
                                    <td className='border'>{p.totalSales}</td>
                                    <td className='px-2'>${p.totalProfit.toFixed(2)}</td>
                                </tr>)
                            ))}
                        </table>
                    </div>

                </div>
                <div className='grid justify-center'>
                    <p className='font-bold'>Sales Numbers by Gender</p>
                    <div className='bg-neutral-400 pt-10 mb-10 mr-5'>
                        <PieChart series={[
                            { data: genderSalesData }
                        ]}
                            width={200}
                            height={200} /></div>
                </div>
                <div>
                    <p className='font-bold'>Sales Numbers by Category</p>
                    <div className='bg-white'>
                        <PieChart series={[
                            { data: categoryPie }
                        ]}
                            width={200}
                            height={200} />
                    </div>
                </div>
            </div>
        </div>
    </div >)
}

export default DashboardView;