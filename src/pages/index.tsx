import MetaHead from "@/components/MetaHead";
import Header from "@/components/Header";
import 'tailwindcss/tailwind.css';
import Footer from "@/components/Footer";
import profilePicture from "@/images/profile-picture.jpg";
import Image from 'next/image';

function Home() {
    return (
        <div className="relative flex flex-col min-h-screen bg-[url('/index-background.png')] bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden">
            <MetaHead title="Darrow Wolf" />
            <main className="main">
                <Header text=""/>
                <div className="bg-white px-4 md:px-12 pt-16 pb-20 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex-shrink-0 flex-col justify-center max-w-md transition-colors dark:bg-neutral-800 mx-auto my-4">
                    {/* Profile Card*/}
                    <div className="select-none">
                        <Image
                            src={profilePicture}
                            alt="Profile Picture"
                            className="shadow-2xl shadow-black/[0.2] rounded-3xl h-50 w-50 mx-auto -mt-40"
                            height={200}
                            width={200}
                        />
                    </div>

                    <div className="text-container mt-2 text-center">
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                            Darrow
                        </h1>

                        <p className="mt-4 pt-4 px-2 text-slate-600 dark:text-white/90">
                            Software Engineer | Generic blue wolf<br/>
                            He/Him 
                        </p>
                    </div>

                    {/* socials buttons */}
                    <div className="flex justify-evenly pt-8 md:pt-12 mb-2">
                        <a
                            href="https://www.twitter.com/DarrowWolf"
                            target="_blank"
                            className="bg-sky-500 font-bold  text-white px-6 py-3 rounded-lg flex items-center space-x-2 transform-gpu transition-all duration-200 hover:bg-sky-400 active:scale-90">
                            <svg className="aspect-square w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.227 14">
                            <path
                                d="M20.8,11.983a7.033,7.033,0,0,1-2.03.556,3.541,3.541,0,0,0,1.554-1.956,7.075,7.075,0,0,1-2.244.858,3.537,3.537,0,0,0-6.022,3.224,10.035,10.035,0,0,1-7.285-3.693,3.539,3.539,0,0,0,1.094,4.719,3.524,3.524,0,0,1-1.6-.442c0,.015,0,.03,0,.045A3.537,3.537,0,0,0,7.1,18.76a3.554,3.554,0,0,1-.931.124,3.5,3.5,0,0,1-.665-.064,3.538,3.538,0,0,0,3.3,2.455,7.132,7.132,0,0,1-5.233,1.464A10.052,10.052,0,0,0,19.048,14.27q0-.23-.01-.458A7.158,7.158,0,0,0,20.8,11.983Z"
                                transform="translate(-3.574 -10.326)"
                                fill="currentColor"/>
                            </svg>
                            <span>Twitter</span>
                        </a>

                        <a href="https://www.github.com/DarrowWolf"
                            target="_blank"
                            className="bg-sky-500 font-bold  text-white px-6 py-3 rounded-lg flex items-center space-x-2 transform-gpu transition-all duration-200 hover:bg-sky-400 active:scale-90">
                            <svg className="aspect-square w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default Home;
