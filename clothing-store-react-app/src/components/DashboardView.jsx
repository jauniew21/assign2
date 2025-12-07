

const DashboardView = (props) => {
    const topSell = [...props.products].sort((a, b) => { return b.sales.total - a.sales.total })
    const topProfit = [...props.products].sort((a, b) => { return (b.sales.total * b.price) - (a.sales.total * a.price)})

    return (<div>
        <p>Sales Dashboard</p>
        <p>poopyhead</p>
        <div>
            <p>Top 10 Selling Products</p>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Gender</th>
                    <th>Category</th>
                    <th>Total Sales (#)</th>
                </tr>
                {topSell.slice(0,10).map(p => {
                    return (<tr>
                        <td>{p.name}</td>
                        <td>{p.gender}</td>
                        <td>{p.category}</td>
                        <td>{p.sales.total}</td>
                    </tr>)
                })}
            </table>
        </div>
        <div>
            <p>Top 10 Profitable Products</p>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Gender</th>
                    <th>Category</th>
                    <th>Total Sales (#)</th>
                    <th>Profit ($)</th>
                </tr>
                {topProfit.slice(0,10).map(p => {
                    return (<tr>
                        <td>{p.name}</td>
                        <td>{p.gender}</td>
                        <td>{p.category}</td>
                        <td>{p.sales.total}</td>
                        <td>${(p.sales.total * p.price).toFixed(2)}</td>
                    </tr>)
                })}
            </table>
        </div>
        <div>
            <p>Sales + Profit by Category</p>
            <p>table, category name, summed sales, profit value, sorted by category</p>
            <p>Category</p>
            <p>Sales $</p>
            <p>Profit $</p>
        </div>
        <div>
            <p>Pie Chart</p>
            <p>sales number by gender</p>
        </div>
        <div>
            <p>Pie Chart</p>
            <p>sales numbers by category</p>
        </div>
    </div>)
}

export default DashboardView;