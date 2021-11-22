// React
import React from 'react';

// Icons
import { FiTwitter } from 'react-icons/fi';

import { ImHome } from 'react-icons/im';
import { BsInfoCircle } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { FaBlog } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';

// Images
import control1 from '../../assets/images/control1.jpg'
import control2 from '../../assets/images/control2.jpg'
import control3 from '../../assets/images/control3.jpg'
import control4 from '../../assets/images/control4.jpeg'

// CSS
import './footer.scss'


const Footer = () => {

    return (

        <footer id="footer">

            <div id="about-twitter-instagram">

                <div id="about-us">
                    <h2>Informations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam accusantium.</p>

                    <span>Privacy Statement &frasl; Accreditation &frasl; Advisories &frasl; Feedback &frasl; Text
                        Only</span>

                    <span>&copy; 2021 Company. All Rights Reserved.</span>
                </div>

                <div id="twitter">
                    <h2>Latest Tweets</h2>
                    <div id="twitter-icon-and-text">
                        <i><FiTwitter /></i>
                        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit porro sequi aliquam quo. "</p>
                    </div>
                    <div id="twitter-icon-and-text">
                        <i><FiTwitter /></i>
                        <p>" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eius sapiente nam laboriosam repellat."</p>
                    </div>
                    <div id="twitter-icon-and-text">
                        <i><FiTwitter /></i>
                        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium. "</p>
                    </div>
                </div>

                <div id="instagram">
                    <h2>Instagram</h2>

                    <div id="footer-controls">
                        <img src={control1} title="Controle de Video Game"
                            alt="Imagem Controle Video Game" id="footer-img" />
                        <img src={control2} title="Controle de Video Game"
                            alt="Imagem Controle Video Game" id="footer-img" />
                    </div>
                    <div id="footer-controls">
                        <img src={control3} title="Controle de Video Game"
                            alt="Imagem Controle Video Game" id="footer-img" />
                        <img src={control4} title="Controle de Video Game"
                            alt="Imagem Controle Video Game" id="footer-img" />
                    </div>
                </div>

            </div>

            <div id="separator"></div>

            <div id="footer-menu">
                <ul>
                    <li><i><ImHome /></i> Home</li>
                    <li><i><BsInfoCircle /></i> About</li>
                    <li><i><MdWork /></i> Our works</li>
                    <li><i><GoTools /></i> Services</li>
                    <li><i><FaBlog /></i> Blog</li>
                    <li><i><RiContactsBookFill /></i> Contacts</li>
                </ul>

                <span>Company.</span>
            </div>

        </footer>

    );

}

export default Footer;