

const Footer = (props) => {
    return (<footer className="pt-10">
        <hr />
        <div className="flex flex-col gap-2 text-xs mt-2 px-40">

            <p className="">
                We are Jaunie and Michelle and this our second assignment in COMP 4513 - Advanced Web Development. We've made a basic store page using React and Tailwind.
                There are several views, both immediately visible (see header) and hidden (admin only). The user is assumed an Admin for practicality reasons.
            </p>
            <p className="">
                If you log yourself out, email: 123@gmail.com, and password: 123. Yes, I did do a Cryptography class, thanks for asking.
            </p>
            <p>
                MaterialUI was used to create all modals (including this one) and charts. And DaisyUI was used to create the carousel on the Home Page.
            </p>

            <a href="https://github.com/jauniew21/assign2/tree/main" target="_blank">Github Repo: https://github.com/jauniew21/assign2/tree/main
            </a>
        </div>
    </footer>)
}

export default Footer;