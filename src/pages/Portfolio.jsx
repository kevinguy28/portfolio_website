import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import ProjectItem from "../components/ProjectItem";
import ProjectCard from "../components/ProjectCard";

function About() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeItem, setActiveItem] = useState(0);
    const [activeCard, setActiveCard] = useState(0);
    const [itemLength, setItemLength] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(
                    collection(database, "projects"),
                    orderBy("created", "desc")
                );
                const querySnapshot = await getDocs(q);
                const displayItem = querySnapshot.docs.map((doc) => doc.data());
                setData(displayItem);
                setItemLength(displayItem.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const activeElementItem = document.querySelector(".list .item");
        const activeElementCard = document.querySelector(".thumbnail .item");

        if (activeElementItem && activeElementCard) {
            activeElementItem.classList.add("active");
            activeElementCard.classList.add("active");
        }
    }, [loading]);

    const cleanUpExpand = () => {
        const cardSlider = document.querySelector(".thumbnail");
        const projectItem = document.querySelector(`.contentItem${activeItem}`);
        const projectDescriptionEx = document.querySelector(
            `.projectItem${activeItem} .projectDescriptionEx`
        );
        const expandBtn = document.querySelector(
            `.projectItem${activeItem} .expandBtn`
        );

        if (cardSlider && projectItem && projectDescriptionEx && expandBtn) {
            cardSlider.classList.remove("hideCard");
            projectItem.classList.remove("expandCard");
            projectDescriptionEx.classList.add("hideCard");
            expandBtn.innerHTML = "Read More";
        }
    };

    const handleSwitch = (index) => {
        const currentActiveElementItem = document.querySelector(
            `.projectItem${activeItem}`
        );
        currentActiveElementItem.classList.remove("active");
        const currentActiveElementCard = document.querySelector(
            `.projectCard${activeCard}`
        );
        currentActiveElementCard.classList.remove("active");
        const newActiveElementItem = document.querySelector(
            `.projectItem${index}`
        );
        newActiveElementItem.classList.add("active");
        const newActiveElementCard = document.querySelector(
            `.projectCard${index}`
        );
        newActiveElementCard.classList.add("active");

        setActiveItem(index);
        setActiveCard(index);
        cleanUpExpand();
    };

    const moveNext = () => {
        const currentActiveElementItem = document.querySelector(
            `.projectItem${activeItem}`
        );
        currentActiveElementItem.classList.remove("active");
        const currentActiveElementCard = document.querySelector(
            `.projectCard${activeCard}`
        );
        currentActiveElementCard.classList.remove("active");

        if (activeItem == itemLength - 1) {
            const newActiveElementItem =
                document.querySelector(`.projectItem0`);
            newActiveElementItem.classList.add("active");
            const newActiveElementCard =
                document.querySelector(`.projectCard0`);
            newActiveElementCard.classList.add("active");
            setActiveItem(0);
            setActiveCard(0);
        } else {
            const newActiveElementItem = document.querySelector(
                `.projectItem${activeItem + 1}`
            );
            newActiveElementItem.classList.add("active");
            const newActiveElementCard = document.querySelector(
                `.projectCard${activeItem + 1}`
            );
            newActiveElementCard.classList.add("active");
            setActiveItem(activeItem + 1);
            setActiveCard(activeItem + 1);
        }
        cleanUpExpand();
    };

    const moveBack = () => {
        const currentActiveElementItem = document.querySelector(
            `.projectItem${activeItem}`
        );
        currentActiveElementItem.classList.remove("active");
        const currentActiveElementCard = document.querySelector(
            `.projectCard${activeCard}`
        );
        currentActiveElementCard.classList.remove("active");

        if (activeItem == 0) {
            const newActiveElementItem = document.querySelector(
                `.projectItem${itemLength - 1}`
            );
            newActiveElementItem.classList.add("active");
            const newActiveElementCard = document.querySelector(
                `.projectCard${itemLength - 1}`
            );
            newActiveElementCard.classList.add("active");
            setActiveItem(itemLength - 1);
            setActiveCard(itemLength - 1);
        } else {
            const newActiveElementItem = document.querySelector(
                `.projectItem${activeItem - 1}`
            );
            newActiveElementItem.classList.add("active");
            const newActiveElementCard = document.querySelector(
                `.projectCard${activeItem - 1}`
            );
            newActiveElementCard.classList.add("active");
            setActiveItem(activeItem - 1);
            setActiveCard(activeItem - 1);
        }
        cleanUpExpand();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="slider w-screen h-[100vh] relative">
            <div className="list ">
                {data.map((item, index) => (
                    <ProjectItem
                        index={index}
                        key={index}
                        title={item.title}
                        url={item.url}
                        description={item.description}
                        descriptionExtended={item.description_extanded}
                        type={item.type}
                        projectUrl={item.project_url}
                        tools={item.tools}
                    />
                ))}
            </div>
            <div className="arrows flex gap-4">
                <button
                    id="prev"
                    className="w-10 h-10 bg-white/20 rounded-sm hover:bg-white hover:text-black"
                    onClick={moveBack}
                >
                    {"<"}
                </button>
                <button
                    id="next"
                    className="w-10 h-10 bg-white/20 rounded-sm hover:bg-white hover:text-black"
                    onClick={moveNext}
                >
                    {">"}{" "}
                </button>
            </div>

            <div className="thumbnail  ">
                {data.map((item, index) => (
                    <ProjectCard
                        index={index}
                        key={index}
                        title={item.title}
                        url={item.url}
                        description={item.description}
                        type={item.type}
                        projectUrl={item.project_url}
                        handleSwitch={handleSwitch}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
