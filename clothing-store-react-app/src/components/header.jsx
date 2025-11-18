

const Header = (props) => {
    return(<div className="flex justify-between">
        <div className="">
            <p>Logo</p>
        </div>

        <div className="flex gap-x-3">
            <p>Home</p> <p>|</p>
            <p>Women</p> <p>|</p>
            <p>Men</p> <p>|</p>
            <p>Browse</p> <p>|</p>
            <p>About</p>
        </div>
    </div>)
}

export default Header;