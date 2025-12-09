

const Footer = (props) => {
    return (<footer className="pt-10">
        <hr />
        <div className="flex flex-col gap-2 text-xs mt-2 px-40">

            <p className="">
                We are Jaunie and Michelle and this our second assignment in COMP 4513 - Advanced Web Development. We've made a basic store page using React and Tailwind. 
                There are several views, both immediately visible (see header) and hidden (admin only, check out the Sales Dashboard and Admin View on the Single Product pages). The user is assumed an Admin for practicality reasons.
            </p>
            <p className="">
                If you log yourself out, email: 123@gmail.com, and password: 123. Yes, I did do a Cryptography class, thanks for asking.
            </p>
            <p>
                MaterialUI was used to create all modals (see About Us and the Admin View drawer) and charts. And DaisyUI was used to create the carousel on the Home Page. 
                Everything else is a mix of useState, useEffect, contextProvider, and other basic React hooks.
            </p>
            <p>
                The most rigorous part of the assignment is the filtering system; the way we've set it up has it expand options if they are in the same category
                and narrow down options in seperate categories. So, selecting mens and womens shows all clothes, but mens and pants shows only men's pants. (That took forever, by the way).
                Also, check out the well formatted Cart and Sales Dashboard.
            </p>

            <a href="https://github.com/jauniew21/assign2/tree/main" target="_blank">Github Repo: https://github.com/jauniew21/assign2/tree/main
            </a>
        </div>
    </footer>)
}

export default Footer;