import 'tailwindcss/tailwind.css';

function Footer() {
  return (
    <footer className="text-center text-sm p-2 fixed bottom-0 w-full">
      <div className="md:flex md:items-center justify-center">
        <span className=" bg-gradient-to-r from-transparent via-white w-56">
          &copy; {new Date().getFullYear()} <a href="https://www.twitter.com/DarrowWolf">Darrow Wolf</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
