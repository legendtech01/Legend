import "./Portfolio.css"
import { motion } from "framer-motion"
import recentWorks from "./data.jsx"



function Portfolio (){
    return(
        <section id="portfolio">
             <h1 className="heading">my <span>portfolio</span></h1>
            <div className="portfolio-container">
                <h2>checkout my latest projects</h2>

                <motion.div 
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 2}}
                  className="portfolio-wrapper">
                        {recentWorks.map ((items, index) =>{
                            return(
                                <div  className="portfolio-content" key={index}>
                                    <img src={items.portfolioImage} alt={items.alter} />
                                    <div className={items.div1}>
                                        <h3>{items.h3}</h3>
                                        <p>{items.p}</p>
                                        <div className={items.div2}>
                                            <a href={items.anchor} id={items.anchor1Id}><i className={items.linkI}></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                </motion.div>
            </div>
           <button className="btn" id="portfolio-btn"><a href="https://github.com/dev0xgenius">More Project</a></button>
        </section>
            
    )
}

export default Portfolio