import 'tailwindcss/tailwind.css';

function Footer(){
    return(
        <footer className="text-center text-sm p-3 absolute bottom-0 w-full">
            <div className="md:flex md:items-center md:justify-evenly">
                <span className="p-4">&copy; {new Date().getFullYear()} <a href="https://www.twitter.com/DarrowWolf">Darrow</a></span>
            </div>
        </footer>
    )
}

export default Footer;
