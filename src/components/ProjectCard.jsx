import React from "react";

const ProjectCard = ({
    index,
    title,
    url,
    description,
    type,
    projectUrl,
    handleSwitch,
}) => {
    return (
        <div
            className={`item projectCard projectCard${index} `}
            onClick={() => handleSwitch(index)}
        >
            <img src={url}></img>
            <div className="content ">{title}</div>
        </div>
    );
};

export default ProjectCard;
