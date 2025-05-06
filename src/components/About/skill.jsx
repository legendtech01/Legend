import React from "react";
import CommunicationSkill from "../../assets/communication.jpg"
import CriticalThinking from "../../assets/criticalThinking.jpg"
import ProblemSolving from "../../assets/problemSolving.jpg"
import CyberSecurityAwareness from "../../assets/securityAwareness.jpg"
import teamWork from "../../assets/teamWork.jpg"
import timeManagement from "../../assets/timeManagement.jpg"
import Github from "../../assets/github.jpg"
import Git from "../../assets/git.jpg"
import Tailwind from "../../assets/tailwind.jpg"
import ReactSkill from "../../assets/react.jpg"
import Js from "../../assets/js.jpg"
import Css from "../../assets/css.jpg"
import Html from "../../assets/html.jpg"


export const MySkills = ({ value }) => {
    return(
        <div className="meterContainer">
            <div className="meterFill" style={{ width: `${value}%`}}>
            </div>
        </div>
    );
};

const skillListData = [
    {
        images: Html,
        value: 88,
        pg: "HTML"
    },
    {
        images: Css,
        value: 72,
        pg: "CSS"
    },
    {
        value: 76,
        images: Js,
        pg: "javaScript"
    },
    {
        value: 74,
        images: Tailwind,
        pg: "tailWind"
    },
    {
        value: 89,
        images: ReactSkill,
        pg: "react"
    },
    {
        value: 70,
        images: Git,
        pg: "git"
    },
    {
        value: 90,
        images: Github,
        pg: "gitHub"
    },
    {
        value: 98,
        images: timeManagement,
        pg: "time management"
    },
    {
        value: 97,
        images: teamWork,
        pg: "team work"
    },
    {
        value: 89,
        images: CyberSecurityAwareness,
        pg: "Security Awareness"
    },
    {
        value: 96,
        images: ProblemSolving,
        pg: "problem solving"
    },
    {
        value: 98,
        images: CriticalThinking,
        pg: "critical thinking"
    },
    {
        value: 99,
        images: CommunicationSkill,
        pg: "communication"
    },
]

export default skillListData