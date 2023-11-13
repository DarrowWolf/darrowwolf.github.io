import 'tailwindcss/tailwind.css';

interface HeaderProps {
    text: string;
}

function Header({ text }: HeaderProps){
    return(
        <div>
            <header className="flex text-center h-24 my-6 sm:my-8 sm:h-40 w-full justify-center items-strech">
            <h1 className="text-2xl sm:text-4xl">{text}</h1>
			</header>
        </div>
    )
}

export default Header