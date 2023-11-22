import dp from "../assets/dp.jpg"

const Cv = () => {
    return (
        <>
            <div className="container">

                <div className="left-side">
                    <div>
                        <img src={dp} className="dp" alt="display-picture" />
                        <h1 className="name">Haseeb Ahmed</h1>
                        <div className="line"></div>
                        <p className="designation">React JS Developer</p>

                    </div>

                    <div>
                        <div className="contact">
                            <ul>
                                <h2>Contact</h2>
                                <div className="line2"></div>
                                <li><p>+92343-5016911</p></li>
                                <li><p>Haseebahmed.itsolution@gmail.com</p></li>
                                <li><p>linkedin.com/in/haseeb-ahmad-1b71a2219</p></li>
                                <li><p>House # CB-942, Street # 2, Quaid Abad Colony, Misrial Road, Rawalpindi. </p></li>
                            </ul>
                        </div>

                        <div className="personal">
                            <ul>
                                <h2>Personal</h2>
                                <div className="line3"></div>
                                <li>  <p>RELIGION: ISLAM</p></li>
                                <li>  <p>CNIC: 37402-3117924-5</p></li>
                                <li> <p>DOB: 28-12-1994</p></li>
                            </ul>
                        </div>

                        <div className="software-skills">
                            <ul>
                                <h2>Software Skills</h2>
                                <div className="line4"></div>
                                <div>

                                    
                                    <div className="html">
                                        <li><h4>HTML</h4></li>

                                        <div className="outer">
                                            <div className="html-inner inner"></div>
                                        </div>
                                    </div>

                                    <div className="css">
                                        <li><h4>CSS</h4></li>

                                        <div className="outer">
                                            <div className="css-inner inner"></div>
                                        </div>
                                    </div>

                                    <div className="bootstrap">
                                        <li><h4>BOOTSTRAP</h4></li>

                                        <div className="outer">
                                            <div className="bootstrap-inner inner"></div>
                                        </div>
                                    </div>

                                    <div className="javascript">
                                        <li><h4>JAVASCRIPT</h4></li>

                                        <div className="outer">
                                            <div className="javascript-inner inner"></div>
                                        </div>
                                    </div>

                                    <div className="react">
                                        <li><h4>REACT</h4></li>

                                        <div className="outer">
                                            <div className="react-inner inner"></div>
                                        </div>
                                    </div>
                                 

                                </div>

                            </ul>
                        </div>
                    </div>
                    </div>

                    <div className="right-side">
                        <div className="about-me">
                            <h2>ABOUT ME</h2>
                            <p> "Aiming to acheive excellence in professional career. Seeking a position of an internee in your prestigious organization, where I can excel my knowledge and abilities in order to gain mutual benefits."</p>

                        </div>
                        <div className="line-1"></div>


                        <div className="education">

                            <h5>EDUCATION</h5>
                            <div className="line-1"></div>

                            <div className="university">
                                <div className="uni-1">
                                    <h5>PRESTON UNIVERSITY Of Nano Science And Technology</h5>
                                    <span>2020</span></div>
                                <div className="uni-2">
                                    <h5>BS (Computer Science)</h5>
                                    <span>passed</span></div>
                            </div>

                            <div className="college">
                                <div className="colg-1">
                                    <h5>Federal Abdali College Rawalpindi</h5>
                                    <span>2015</span></div>
                                <div className="colg-2">
                                    <h5>ICS (Computer Science)</h5>
                                    <span>passed</span></div>
                            </div>

                            <div className="school">
                                <div className="school-1">
                                    <h5>Future Foundation School Rawalpindi</h5>
                                    <span>2012</span></div>
                                <div className="school-2">
                                    <h5>Matriculation</h5>
                                    <span>passed</span></div>
                            </div>
                        </div>


                        <div className="experience">

                            <h5>EXPERIENCE</h5>
                            <div className="line-1"></div>

                            <h5>Works At Lucky Enterprises as a Admin & Store Incharge for 2014 to 2016.</h5>
                            <h5>Internship at 2nd Sep 2020 to 5th Dec 2020 as Android Developer (Nextlink Technologies)</h5>
                            <h5>Works At DWP (Digital World Pakistan) as a Assistant Warehouse for 2016 to 2023.</h5>

                        </div>


                        <div className="Projects">
                            <h5>PROJECTS</h5>
                            <div className="line-1"></div>

                            <div className="final-year">
                                <div className="finalyear-1"> <h5>Final Year Project</h5></div>
                                <div className="finalyear-2">  <h5>All In One (Android Application) </h5></div>
                            </div>

                          
                        </div>

                        <div className="hobbies">
                            <h5>HOBBIES</h5>
                            <div className="line-1"></div>
                            <h5>Quran Reciting</h5>
                            <h5>Naat Reciting</h5>
                        </div>

                    </div>

                
            </div>
        </>

    )
}
export default Cv;