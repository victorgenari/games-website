// React
import React, { useState } from 'react';

// Icons
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

import { ImHome } from 'react-icons/im';
import { BsInfoCircle } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { FaBlog } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// CSS
import './header.scss'


const Header = () => {

    // Visibilidade MODAL
    const [modalAccount, setModalAccount] = useState(false)

    // Função abrir MODAL
    function openModal() {
        setModalAccount(true)
    }

    // Função fechar MODAL
    function closeModal() {
        setModalAccount(false)
    }

    return (

        <header id="header">

            <section id="menu-logo-and-social-media">

                <div id="menu-logo">
                    <span>Company.</span>
                </div>

                <div id="menu-social-media">
                    <i><FiFacebook /></i>
                    <i><FiTwitter /></i>
                    <i><FiInstagram /></i>
                </div>

            </section>


            <section id="menu-btns-background">

                <div id="menu-btns">
                    <ul>
                        <li><i><ImHome /></i> Home</li>
                        <li><i><BsInfoCircle /></i> About</li>
                        <li><i><MdWork /></i> Our works</li>
                        <li><i><GoTools /></i> Services</li>
                        <li><i><FaBlog /></i> Blog</li>
                        <li><i><RiContactsBookFill /></i> Contacts</li>
                    </ul>


                    <div id="menu-icon-and-account" onClick={openModal}>
                        <i><FaUserAlt /></i>
                        <span>Minha conta</span>
                    </div>
                </div>

            </section>

            {/* Visibilidade Modal */}
            {modalAccount && (

                <div id="modal-bg">

                    <div id="modal">

                        <div id="modal-icon-close" onClick={closeModal}>
                            <i><AiOutlineCloseCircle /></i>
                        </div>

                        <div id="all-form-without-icon-close">
                            <h2>Login</h2>

                            <div id="modal-form">
                                <label>Nome:</label>
                                <input type="text" placeholder="Seu nome" />

                                <label>E-mail:</label>
                                <input type="email" placeholder="Conta de email" />

                                <label>Senha:</label>
                                <input type="password" placeholder="Sua senha" />
                            </div>

                            <div id="modal-btns">
                                <button type="button" id="modal-btn-enter">Entrar</button>
                                <button type="button" id="modal-btn-cancel" onClick={closeModal}>Cancelar</button>
                            </div>

                            <div id="modal-icons">
                                <i><FiFacebook /></i>
                                <i><FiTwitter /></i>
                                <i><FiInstagram /></i>
                            </div>
                        </div>

                    </div>

                </div>

            )}

        </header>

    );

}

export default Header;