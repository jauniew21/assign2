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
            <div className="">
                <p className="">Shipping</p>
                <select className="">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                    <option value="priority">Priority</option>
                </select>
                <select className="">
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="internation">International</option>
                </select>
            </div>
            <div className="">
                <p className="">Summary</p>
                <div className="">
                    <div className="">
                        <p>Merchandise</p>
                        <p>$</p>
                    </div>
                    <div className="">
                        <p>Shipping</p>
                        <p>$</p>
                    </div>
                    <div className="">
                        <p>Tax</p>
                        <p>$ *5%*</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>$</p>
                    </div>
                </div>
                <button className="">Checkout</button>
            </div>
        </div>

    </div>


    )

}

export default ShoppingCartView;
