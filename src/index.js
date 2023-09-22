import  React  from "react";
import { createRoot } from "react-dom/client";
import "./style/avatar.css";
import "./style/main.css";
import "./style/description.css";
import "./style/skills.css";

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
            <Skill skill="Coding 💻"/>
            <Skill skill="Database 🗄️"/>
            <Skill skill="Web Development 🌐"/>
            <Skill skill="Mobile Apps 📱"/>
            <Skill skill="Problem Solving 🧩"/>
            <Skill skill="Testing 🧪"/>
            <Skill skill="DevOps 🚀"/>
            <Skill skill="Analysis 📊"/>
            <Skill skill="Version Control 🛠️"/>
            <Skill skill="Learning 📚"/>
            <Skill skill="Dragon 🐉"/>
        </div>
    )
}

function Skill(props){
    return (
        <div class="skill">
            <p>{props.skill}</p>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
