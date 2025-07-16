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
                    <img src="/kevingrad.png" alt="" />
                </div>

                <div className="lg:w-2/3 mx-auto lg:mx-0 w-[85%] text-sony-dark-grey introText ">
                    <div>
                        I'm a Software Engineer, & Data Analyst, located in{" "}
                        <span>
                            {" "}
                            <div className="inline  text-sony-red"> Tor</div>
                            <div className="inline  text-sony-logo-yellow ">
                                onto{" "}
                            </div>
                            <div className="inline  text-sony-logo-green ">
                                Ont
                            </div>
                            <div className="inline  text-sony-blue ">ario</div>!
                        </span>
                    </div>
                    <div className="text-white">
                        I’m passionate about building projects that are both
                        useful and meaningful.
                    </div>
                    <div className="text-sony-dark-grey">
                        {" "}
                        The languages I speak are
                        <div className="inline  text-sony-red "> Python </div>
                        <div className="inline  text-sony-logo-yellow ">
                            HTML{" "}
                        </div>
                        <div className="inline  text-sony-logo-green ">
                            Typescript{" "}
                        </div>
                        <div className="inline  text-sony-blue ">SQL</div>!
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
