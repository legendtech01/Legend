import React from "react"
import "./About.css"
import skillListData from "./skill"
import { MySkills } from "./skill"
import { motion } from "framer-motion"
import { myInfoTwo, myInfoOne, historyData } from "../data.js"


function About() {
    return (
        <div>
            <section className="about-section" id="about">
                <div className="about-container">
                    <h1 className="heading">about <span>me</span></h1>

                    <div className="about-wrapper">

                        <motion.div 
                        initial={{opacity: 0, translateX: "-100%"}}
                        whileInView={{opacity: 1, translateX: 0}}
                        transition={{duration: 2}}
                        className="personal-info">
                            <h2>personal infos</h2>

                            <div className="personal-info-wrapper">
                                <div>
                                    {myInfoOne.map((items, index) =>{
                                        return(
                                            <div key={index}>
                                                <p>{items.pg} <span>{items.spn}</span></p>
                                            </div>
                                        )
                                    })}
                                    <button className="btn"><a href="/AboutMe.pdf" download={true} target="_blank" rel="noopener noreferrer">more about me</a><i className="fas fa-arrow-right"></i></button>
                                </div>
                                <div>
                                    {myInfoTwo.map((items, index) =>{
                                        return(
                                            <div key={index}>
                                                <p>{items.pg} <span>{items.spn}</span></p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </motion.div>

                        <motion.div 
                        initial={{opacity: 0, translateX: "100%"}}
                        whileInView={{opacity: 1, translateX: 0}}
                        transition={{duration: 2}}
                        className="history">
                            {historyData.map ((items, index) =>{
                                return(
                                    <div className="box" key={index}>
                                        <span>{items.spn}</span>
                                        <p>{items.paragraf}</p>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>
                    <aside>
                        <h2 className="heading">my <span>skills</span></h2>
                        <div className="skillsContainer">
                            <div className="skillContent">
                                {skillListData.map((items, index) =>{
                                    return(
                                        <div className="skillList" key={index}>
                                            <img src={items.images} loading="lazy" alt="my skills" />
                                            <MySkills value={items.value}/>
                                            <p>{items.pg}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </aside>
                </div>
            </section >
        </div>
    )
}

export default About
