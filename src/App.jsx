import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import gsap from "gsap";
import "./styling/app.css";

function App() {
    useEffect(() => {
        const container = document.querySelector(".container");
        const menuToggle = document.querySelector(".menu-toggle");
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuContent = document.querySelector(".menu-content");
        const menuPreviewImg = document.querySelector(".menu-preview-img");
        const menuLinks = document.querySelectorAll(".link a");
        let isOpen = false;
        let isAnimating = false;

        const scrollLinks = document.querySelectorAll(".scroll-link");

        scrollLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                closeMenu();
            });
        });

        menuToggle.addEventListener("click", () => {
            if (!isOpen) openMenu();
            else closeMenu();
        });

        function cleanUpPreviewImages() {
            const previewImages = menuPreviewImg.querySelectorAll("img");
            if (previewImages.length > 3) {
                for (let i = 0; i < previewImages.length - 3; i++) {
                    menuPreviewImg.removeChild(previewImages[i]);
                }
            }
        }

        function resetPreviewImage() {
            menuPreviewImg.innerHTML = "";
            const defaultPreviewImg = document.createElement("img");
            defaultPreviewImg.src = "/pexels-galeevraw-8602270.jpg";
            menuPreviewImg.appendChild(defaultPreviewImg);
        }

        function animateMenuToggle(isOpening) {
            const open = document.querySelector("p#menu-open");
            const close = document.querySelector("p#menu-close");

            gsap.to(isOpening ? open : close, {
                x: isOpening ? -5 : 5,
                y: isOpening ? -10 : 10,
                rotation: isOpening ? -5 : 5,
                opacity: 0,
                delay: 0.25,
                duration: 0.5,
                ease: "power2.out",
            });

            gsap.to(isOpening ? close : open, {
                x: 0,
                y: 0,
                rotation: 0,
                opacity: 1,
                delay: 0.5,
                duration: 0.5,
                ease: "power2.out",
            });
        }

        function openMenu() {
            if (isAnimating || isOpen) return;
            isAnimating = true;

            gsap.to(container, {
                rotation: 10,
                x: 300,
                y: 450,
                scale: 1.5,
                duration: 1.25,
                ease: "power4.inOut",
            });

            animateMenuToggle(true);

            gsap.to(menuContent, {
                rotation: 0,
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.25,
                ease: "power4.inOut",
            });

            gsap.to([".link a", ".social a"], {
                y: "0%",
                opacity: 1,
                duration: 1,
                delay: 0.75,
                stagger: 0.1,
                ease: "power3.out",
            });

            gsap.to(menuOverlay, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
                duration: 1.25,
                ease: "power4.inOut",
                onComplete: () => {
                    isOpen = true;
                    isAnimating = false;
                },
            });
        }

        function closeMenu(callback) {
            if (isAnimating || !isOpen) return;
            isAnimating = true;

            gsap.to(container, {
                rotation: 0,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1.25,
                ease: "power4.inOut",
            });

            animateMenuToggle(false);

            gsap.to(menuContent, {
                rotation: -15,
                x: -100,
                y: -100,
                scale: 1.5,
                opacity: 0.25,
                duration: 1.25,
                ease: "power4.inOut",
            });

            gsap.to(menuOverlay, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1.25,
                ease: "power4.inOut",
                onComplete: () => {
                    isOpen = false;
                    isAnimating = false;
                    gsap.set([".link a", ".social a"], { y: "120%" });
                    resetPreviewImage();
                    if (typeof callback === "function") callback();
                },
            });
        }

        menuLinks.forEach((link) => {
            link.addEventListener("mouseover", () => {
                if (!isOpen || isAnimating) return;
                const imgSrc = link.getAttribute("data-img");
                if (!imgSrc) return;

                const previewImages = menuPreviewImg.querySelectorAll("img");

                if (
                    previewImages.length > 0 &&
                    previewImages[previewImages.length - 1].src.endsWith(imgSrc)
                )
                    return;

                const newPreviewImage = document.createElement("img");
                newPreviewImage.src = imgSrc;
                newPreviewImage.style.opacity = 0;
                newPreviewImage.style.transform = "scale(1.25) rotate(10deg)";

                menuPreviewImg.appendChild(newPreviewImage);
                cleanUpPreviewImages();

                gsap.to(newPreviewImage, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.75,
                    ease: "power2.out",
                });
            });
        });
    }, []);
    return (
        <div className="m-0 p-0 box-border overflow-x-hidden">
            <nav>
                <div className="logo ">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="menu-toggle">
                    <p id="menu-open">Menu</p>
                    <p id="menu-close">Close</p>
                </div>
            </nav>
            <div className="menu-overlay">
                <div className="menu-content">
                    <div className="menu-items">
                        <div className="col-lg">
                            <div className="menu-preview-img">
                                <img
                                    src="/pexels-galeevraw-8602270.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="menu-links">
                                <div className="link">
                                    <Link
                                        to={"/"}
                                        className="scroll-link"
                                        href="#visions-target"
                                        data-img="/kevingrad.png?v=2"
                                    >
                                        About
                                    </Link>
                                </div>
                                <div className="link">
                                    <Link
                                        to={"/portfolio"}
                                        data-img="/skills.jpg"
                                        className="scroll-link"
                                    >
                                        Portfolio
                                    </Link>
                                </div>
                                <div className="link">
                                    {" "}
                                    <a
                                        data-img="/tower.jpg"
                                        href="https://www.linkedin.com/in/kevinhuytran/"
                                        target="_blank"
                                    >
                                        Linkedin{" "}
                                    </a>
                                </div>

                                <div className="link">
                                    <a
                                        href="#"
                                        data-img="/pexels-nietjuhart-1809342.jpg"
                                        onClick={() =>
                                            (window.location.href =
                                                "mailto:kevinhuytran1128@gmail.com")
                                        }
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>
                            {/* <div className="menu-socials">
                                <div className="social">
                                    <a href="#">TMP</a>
                                </div>
                                <div className="social">
                                    <a href="#">TMP</a>
                                </div>
                                <div className="social">
                                    <a href="#">TMP</a>
                                </div>

                                <div className="social">
                                    <a href="#">TMP</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="menu-footer">
                    <div className="col-lg">
                        {/* <a href="#">Run Sequence</a> */}
                    </div>
                    <div className="col-sm">
                        {/* <a href="#">TMP</a> */}
                        <p href="#">© 2025 Kevin Tran</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <section className="hero flex items-end">
                    <div className="hero-img">
                        <img src="/ps-controller.jpg" alt="" />
                    </div>
                    <h1 className="text-white p-4">
                        Kevin Tran | Toronto Metropolitan University
                    </h1>
                </section> */}
                <div
                    id="target-scroll"
                    className="caret-transparent focus:outline-none  w-screen"
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
