import  React  from "react";
import { createRoot } from "react-dom/client";
import "./style/avatar.css";
import "./style/main.css";
import "./style/description.css";
import "./style/skills.css";

const skills = [
    {
        name:  "Coding",
        level: "Advanced",
        color: "#C3DCAF",
    },
    {
        name:  "PhP",
        level: "Advanced",
        color: "#E84F33",
    },
    {
        name:  "Javascript",
        level: "Advanced",
        color: "#60DAFB",
    },
    {
        name:  "React",
        level: "Beginner",
        color: "#FF0066",
    },
];

function App(){
    return (
    <div className="container">
        <h1>Boss Resume</h1>
        <Avatar />
        <Description />
        <Skills />
    </div>
    )
}

function Avatar(){
    return(
        <div >
            <img className="avatar-img" src="images/avatar.jpg" alt="Avatar"></img>
        </div>
    )
}

function Description(){
    return (
        <div className="description">
            <p className="description-text">Meet [Mihaita Boss] 🚀, a seasoned PHP dev on an epic journey to conquer React ⚛️. With PHP prowess and a hunger for new skills, they're diving headfirst into the React universe. Get ready for some mind-blowing creations and a 😃 that never quits! #PHPProLearningReact</p>
        </div>
    )
}

function Skills(){
    return (
        <div className="skills">
            {skills.map((data) => (
                <Skill skill={data} />
            ))}
        </div>
    )
}

function Skill({skill}){
    return (
        <div className="skill-wrapper">
            <p style={{"background-color": skill.color}} className="skill">{skill.name} {skill.level === "Advanced" ? "💪" : "🪫"}</p>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
