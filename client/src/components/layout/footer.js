import React, { Component } from "react";
import {Footer, Row, Container} from 'react-materialize';


import './footer.css';



class Foot extends Component {
  
    render() {
        return (
            <div className>
                <Footer
                    copyrights= {
                        `MERN Login \u00A9 2020`
                    }
                    // moreLinks={<a />}
                    links={
                        <ul className="footerUL">
                            <p className="center-align">
                                Links
                            </p>
                            <hr/>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Shuang Chen
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/shuang-chen-388548159/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                                            <i className="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/ShuangChenGust" target="_blank" rel="noopener noreferrer" title="View more Projects on GitHub">
                                            <i className="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Tutorial
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/charles-glass-57512412a/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                                            <i className="fa fa-book"></i>
                                            <br/>
                                            Blog(中)
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/charliedglass" target="_blank" rel="noopener noreferrer" title="View more Projects on GitHub">
                                            <i className="fab fa-github"></i>
                                            <br/>
                                            ThisRepo
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    }
                    className="footer"
                    >
                    <Container>
                        <Row className="text">
                            
                                <h5 className="center-align">
                                    MERN Stack Login App
                                </h5>
                                <p className="center-align">
                                    The Full document and tutorial of one mern stack app.
                                </p>
                                <p className="text">
                                    With this app, you can easily learn how to setup the backend(MongoDB, Express, Jwt) Front end(React/ Redux). If you like my product, feel free to contact me or give me a star!
                                    contact email: guschenwpi@gmail.com

                                </p>
                            
                        </Row>
                    </Container>
                </Footer>
            </div>
        );
    }
}
  
export default Foot;