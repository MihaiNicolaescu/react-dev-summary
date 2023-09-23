import  React  from "react";
import { createRoot } from "react-dom/client";
import "./style/avatar.css";
import "./style/main.css";
import "./style/description.css";
import "./style/skills.css";

const skills = [
    {name:  "Coding 💻"},
    {name: "Database 🗄️"},
    {name: "Web Development 🌐"},
    {name: "Mobile Apps 📱"},
    {name: "Problem Solving 🧩"},
    {name: "Testing 🧪"},
    {name: "DevOps 🚀"}
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

function Skill(props){
    return (
        <div className="skill">
            <p>{props.skill.name}</p>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
