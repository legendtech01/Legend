import "./Hero.css"
import profilePic from "../../assets/Dp.png"
import { motion } from "framer-motion"


function Hero() {
    return (
        <>
            <section className="home-section" id="home">

                <div className="home-container">
                    <motion.div 
                    initial={{opacity: 0, translateX: "-100%"}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 2}}
                    className="img" id="left">
                        <img src={profilePic} alt="photo" />
                    </motion.div>

                    <motion.div 
                    initial={{opacity: 0, translateX: "100%"}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 2}}
                    className="home-content" id="right">
                        <div className="home-wrapper">
                            <h2>hello,</h2>
                            <h1>i'm prosper oguamanam</h1>
                            <h2>a frontend developer</h2>

                            <p> I craft visual appealing, responsive and user-friendly websites that not only works smoothly
                                but leave a lasting impression. with a deep passion for building on the web and a curiosity
                                for blockchain technology, i blend creativity with code.
                                whether it's developing modern web apps or exploring the world of NFTs, I'm driven by innovation,
                                learning and delivering value.
                            </p>

                            <div className="Legend">
                                <a href="https://t.me/LegendDotSui"><i class="fa-solid fa-paper-plane"></i></a>
                                <a href="https://x.com/LegendDotSui?t=T0UAt7Q023JGXd5wXHS1Mw&s=16"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://github.com/legendtech01"><i className="fa-brands fa-github"></i></a>
                            </div>

                            <button className="btn">Available For New Project</button>
                        </div>
                    </motion.div>
                </div>
            </section>
            
        </>
    )
}

export default Hero