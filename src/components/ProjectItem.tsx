import "../styling/project.css";
import { useState } from "react";

const ProjectItem = ({
    index,
    title,
    url,
    description,
    descriptionExtended,
    type,
    projectUrl,
    tools,
}) => {
    const [expanded, setExpanded] = useState(false);

    const expandCard = () => {
        const cardSlider = document.querySelector(".thumbnail");
        const projectItem = document.querySelector(`.contentItem${index}`);
        const projectDescriptionEx = document.querySelector(
            `.projectItem${index} .projectDescriptionEx`
        );
        const expandBtn = document.querySelector(
            `.projectItem${index} .expandBtn`
        );
        if (
            expanded &&
            cardSlider &&
            projectItem &&
            projectDescriptionEx &&
            expandBtn
        ) {
            cardSlider.classList.remove("hideCard");
            cardSlider.classList.add("showCard");
            projectItem.classList.remove("expandCard");
            projectDescriptionEx.classList.remove("showDescriptionEx");
            projectDescriptionEx.classList.add("hideDescriptionEx");
            expandBtn.innerHTML = "Read More";
            setExpanded(false);
        } else if (
            !expanded &&
            cardSlider &&
            projectItem &&
            projectDescriptionEx &&
            expandBtn
        ) {
            cardSlider.classList.add("hideCard");
            cardSlider.classList.remove("showCard");
            projectItem.classList.add("expandCard");
            projectDescriptionEx?.classList.remove("hideDescriptionEx");
            projectDescriptionEx.classList.add("showDescriptionEx");
            expandBtn.innerHTML = "Read Less";
            setExpanded(true);
        }
    };

    return (
        <div className={`item w-screen h-full projectItem${index}`}>
            <img src={url}></img>
            <div
                className={`content absolute left-1/10 top-1/5 z-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg contentItem${index} flex flex-col `}
            >
                <h4 className="projectSubheader">
                    {tools.map((tool) => tool).join(" | ")}
                </h4>
                <h1 className="projectHeader">{title}</h1>
                <div className="flex flex-col gap-4 mb-4">
                    <p className="projectDescription">{description}</p>
                    <p className="projectDescriptionEx hideDescriptionEx">
                        {descriptionExtended}
                    </p>
                </div>

                <div className="mt-auto flex gap-4 projectBtns">
                    <div
                        className={`bg-white p-2 rounded-sm  mt-auto w-fit cursor-pointer hover:bg-gray-500 transition expandBtn projectBtns`}
                        onClick={() => expandCard()}
                    >
                        Read More
                    </div>
                    {projectUrl.length > 0 && (
                        <a
                            href={projectUrl}
                            target="_blank"
                            className={`bg-white p-2 rounded-sm  mt-auto w-fit cursor-pointer hover:bg-gray-500 transition projectBtns`}
                        >
                            Visit Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
