import MetaHead from "@/components/MetaHead";
import Header from "@/components/Header";
import 'tailwindcss/tailwind.css';
import Footer from "@/components/Footer";
import profilePicture from "@/images/profile-picture.jpg";
import Image from 'next/image';

function Home() {
    return (
        <div className="relative flex flex-col min-h-screen bg-slate-300">
            <MetaHead title="Darrow Wolf" />
            <main className="main">
                <Header />
                <div className="bg-white px-12 pt-16 pb-40 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800 mx-auto my-4">
                    {/* Profile Card*/}
                    <div className="select-none">
                        <Image
                            src={profilePicture}
                            alt="Profile Picture"
                            className="shadow-2xl shadow-black/[0.2] rounded-3xl h-50 w-50 mx-auto -mt-40 transform-gpu transition-all hover:scale-125"
                            height={200}
                            width={200}
                        />
                    </div>

                    <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                        Darrow
                    </h1>

                    <p className="mt-4 text-slate-600 dark:text-white/90">
                        Software Engineer | Genaric blue wolf | He/Him 
                    </p>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default Home;
