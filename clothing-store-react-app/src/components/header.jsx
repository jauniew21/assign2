import { Link } from 'react-router-dom'

const Header = (props) => {
    return(<div className="flex">
        <div className="flex justify-start">
            <p>Logo</p>
        </div>

        <div className="flex justify-end gap-x-3">
            <Link to="/home">Home</Link> <p>|</p>
            <p>Women</p> <p>|</p>
            <p>Men</p> <p>|</p>
            <p>Browse</p> <p>|</p>
            <p>About</p>
        </div>

        <div>
            <Link to="/cart">Cart</Link>
        </div>
    </div>)
}

export default Header;