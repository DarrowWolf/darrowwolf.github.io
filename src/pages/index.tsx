import 'tailwindcss/tailwind.css';
import { redirect } from 'next/navigation'
import { useEffect } from "react";

function Index() {
    useEffect(() => {
        redirect('/home');
    }, []);
    return <></>;
}

export default Index;
