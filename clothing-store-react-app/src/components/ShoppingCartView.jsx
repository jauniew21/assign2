const ShoppingCartView = (props) => {

    return (
        // <div>
        //     <p>poopyhead</p>
        // </div>)
        <div>
        <p className="">Shopping Cart</p>
        <div className="">
            <div className="">
                <p>Items</p>
                <p>Color</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className="">
                <p>Your shopping cart is empty.</p>
            </div>
            <div className="">
                <div className="">
                    <button>-</button>
                    {/* <img src="">placeholder</img> */}
                    <p className="">Product Title</p>
                    {/* <span style="color: #E9E612">■</span> */}
                </div>
            </div>
        </div>

    </div>


    )

}

export default <ShoppingCartView />;

// <Link to="/cart">Cart</Link>