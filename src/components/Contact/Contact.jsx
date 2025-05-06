import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"
import { motion } from "framer-motion";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
 

function Contact(){
    const formRef = useRef ();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.name,
                to_name: 'Legend',
                from_email: form.email,
                to_email: 'legendtech966@gmail.com',
                from_subject: form.subject,
                message: form.message,
            },
            publicKey
        )
        .then(() => {
            setLoading(false);
            alert('Thank you. i will get back to you as soon as possible.');
            
            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        }, (error) => {
            setLoading(false)

            console.log(error);
            alert('Something Went Wrong, Try Again.')
        })
    }

    return(
        <section id="contact">
            <div className="contact-container" >
                <h1 className="heading">contact <span>me</span></h1>

                <div className="contact-wrapper">
                    <motion.div  
                      initial={{opacity: 0, translateX: "-100%"}}
                      whileInView={{opacity: 1, translateX: 0}}
                      transition={{duration: 2}}
                    className="contact-content">
                        <div className="contact-intro">
                            <h2>get in <span>touch</span></h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                               Adipisci ipsum natus quibusdam similique  
                               soluta quaerat, obcaecati ratione labore.
                            </p>
                        </div>

                        <div className="contact-info-wrapper">
                            <div className="contact-info">
                                <i className="fas fa-home"></i>
                                <div className="Legend">
                                    <h3>address point</h3>
                                    <p>148 uniport road choba portharcourt, rivers state Nigeria</p>
                                </div>
                            </div>
        
                            <div className="contact-info">
                                <i className="fas fa-envelope"></i>
                                <div className="Legend">
                                    <h3>official email</h3>
                                    <p>legendtech966@gmail.com</p>
                                </div>
                            </div>
        
                            <div className="contact-info">
                                <i className="fas fa-phone"></i>
                                <div className="Legend">
                                    <h3>official phone-number</h3>
                                    <p>+234 810 6356 106</p>
                                    <p>+234 705 7800 674</p>
                                </div>
                            </div>

                            <div className="Legend">
                                <a href="https://wa.me/2347057800674"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://x.com/Legend_1234555?s=08"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </motion.div>

                 
                    <motion.div 
                      initial={{opacity: 0, translateX: "100%"}}
                      whileInView={{opacity: 1, translateX: 0}}
                      transition={{duration: 2}}
                    className="contact-form">
                        <form ref={formRef}  onSubmit={handleSubmit}>
                            <input type="text" onChange={handleChange} value={form.name} name="name" placeholder="your name" required />
                            <input type="email" onChange={handleChange} value={form.email} name="email" placeholder="your email" required />
                            <input type="text" onChange={handleChange} value={form.subject} id="subject" placeholder="your subject" name="subject" required />
                            <textarea name="message" onChange={handleChange} value={form.message} placeholder="your message" required></textarea>
                            <button className="btn" type="submit">
                                {loading ? 'sending...' : 'send message'}
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </motion.div>
                </div>


            </div>
        </section>
    )
}

export default Contact