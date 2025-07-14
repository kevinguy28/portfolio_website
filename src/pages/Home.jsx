import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Python from "../assets/svgs/python.svg?react";
import HTML5 from "../assets/svgs/html5.svg?react";
import TS from "../assets/svgs/ts.svg?react";
import MYSQL from "../assets/svgs/mysql.svg?react";
import CSS3 from "../assets/svgs/carousel/css3.svg?react";
import DJANGOREST from "../assets/svgs/carousel/django_rest.svg?react";
import DJANGO from "../assets/svgs/carousel/django.svg?react";
import FIREBASE from "../assets/svgs/carousel/firebase.svg?react";
import GIT from "../assets/svgs/carousel/git.svg?react";
import GITHUB from "../assets/svgs/carousel/github.svg?react";
import JAVA from "../assets/svgs/carousel/java.svg?react";
import JAVASCRIPT from "../assets/svgs/carousel/javascript.svg?react";
import PHP from "../assets/svgs/carousel/php.svg?react";
import POSTGRESQL from "../assets/svgs/carousel/postgresql.svg?react";
import REACT from "../assets/svgs/carousel/react.svg?react";
import REACTROUTER from "../assets/svgs/carousel/reactrouter.svg?react";
import TAILWIND from "../assets/svgs/carousel/tailwindcss.svg?react";
import VITEJS from "../assets/svgs/carousel/vitejs.svg?react";

function Home() {
    return (
        <div>
            {" "}
            <section>
                {" "}
                <section className="hero flex items-end">
                    <div className="hero-img">
                        <img src="/ps-controller.jpg" alt="" />
                    </div>
                    <h1 className="text-white p-4">Kevin Tran | TMU</h1>
                </section>
            </section>
            <section className="m-auto w-screen p-4 flex flex-col justify-center lg:justify-end relative md:h-[100vh] bg-dark-blue">
                <div className="absolute top-0 right-0 w-1/3 h-[100vh] object-contain hidden lg:block">
                    <img src="/kevin-transparent.png" alt="" />
                </div>

                <div className="lg:w-2/3 mx-auto lg:mx-0 w-[85%] text-sony-dark-grey ">
                    <h3>
                        Im a Software Engineer, & Data Analyst, located in{" "}
                        <span>
                            {" "}
                            <h3 className="inline  text-sony-red"> Tor</h3>
                            <h3 className="inline  text-sony-logo-yellow ">
                                onto{" "}
                            </h3>
                            <h3 className="inline  text-sony-logo-green ">
                                Ont
                            </h3>
                            <h3 className="inline  text-sony-blue ">ario</h3>!
                        </span>
                    </h3>

                    <h3 className="text-white">
                        I’m passionate about building projects that are both
                        useful and meaningful.
                    </h3>
                    <h3 className="text-sony-dark-grey">
                        {" "}
                        The languages I speak are
                    </h3>
                    <span>
                        <h3 className="inline  text-sony-red text-4xl">
                            {" "}
                            Python{" "}
                        </h3>
                        <h3 className="inline  text-sony-logo-yellow text-4xl">
                            HTML{" "}
                        </h3>
                        <h3 className="inline  text-sony-logo-green text-4xl">
                            Typescript{" "}
                        </h3>
                        <h3 className="inline  text-sony-blue text-4xl">
                            SQL{" "}
                        </h3>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default Home;
