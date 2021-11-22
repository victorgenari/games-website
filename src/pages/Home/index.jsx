import React, { useState } from 'react';

// Icons
import { BiSearchAlt } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
import { BsInfoCircle } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { FaBlog } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpCircle } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Images
import amongus from '../../assets/images/AmongUs.jpg'
import arksurvivalevolved from '../../assets/images/ArkSurvivalEvolved.jpg'
import banished from '../../assets/images/Banished.jpg'
import becastled from '../../assets/images/Becastled.jpg'
import bloodandbacon from '../../assets/images/Blood&Bacon.jpg'
import castlecrashers from '../../assets/images/CastleCrashers.jpg'
import citiesskylines from '../../assets/images/CitiesSkylines.jpg'
import companyofheroestwo from '../../assets/images/CompanyOfHeroes2.jpg'
import conanexiles from '../../assets/images/ConanExiles.jpg'
import counterstrike from '../../assets/images/CounterStrike.jpg'
import counterstrikeglobaloffensive from '../../assets/images/CounterStrikeGlobalOffensive.jpg'
import dawnofman from '../../assets/images/DawnOfMan.jpg'
import deadbydaylight from '../../assets/images/DeadByDayLight.jpg'
import deadrising from '../../assets/images/DeadRising.jpg'
import dontstarvetogether from '../../assets/images/DontStarveTogether.jpg'
import dyinglight from '../../assets/images/DyingLight.jpg'
import fallguys from '../../assets/images/FallGuys.jpg'
import grandtheftautosanandreas from '../../assets/images/GrandTheftAutoSanAndreas.jpg'
import grandtheftautov from '../../assets/images/GrandTheftAutoV.jpg'
import greenhell from '../../assets/images/GreenHell.jpg'
import howtosurvivetwo from '../../assets/images/HowToSurvive2.jpg'

// SCSS
import './home.scss'

// HEADER and FOOTER
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export function Home() {

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

    // Armazenando dados dos jogos
    const games = [

        {
            imagem: amongus,
            nome: 'Among Us',
            estilo: 'Casual',
            valor: '10,89',
            descricao: 'Um jogo de trabalho em equipe e trairagem online ou em rede local para 4 a 15 jogadores .. no espaço!',
            lancamento: '16/nov/2018',
            desenvolvedor: 'Innersloth'
        },

        {
            imagem: arksurvivalevolved,
            nome: 'ARK: Survival Evolved',
            estilo: 'Sobrevivência',
            valor: '57,99',
            descricao: 'Como um homem ou mulher abandonado nu, congelando e morrendo de fome numa ilha misteriosa, você precisa caçar, colher, construir itens, cultivar e construir abrigos para sobreviver.',
            lancamento: '27/ago/2017',
            desenvolvedor: 'Studio Wildcard, Instinct Games, Efecto Studios & Virtual Basement LLC'
        },

        {
            imagem: banished,
            nome: 'Banished',
            estilo: 'Estratégia',
            valor: '34,99',
            descricao: 'Neste jogo de estratégia de construção de cidades, você controla um grupo de viajantes exilados que decidem recomeçar suas vidas em uma nova terra. Eles têm apenas as roupas do corpo e um carrinho cheio de suprimentos de sua terra natal ..',
            lancamento: '18/fev/2014',
            desenvolvedor: 'Shining Rock Software LLC'
        },

        {
            imagem: becastled,
            nome: 'Becastled',
            estilo: 'Estratégia',
            valor: '28,99',
            descricao: 'Becastled é sobre construir e defender seu castelo de cercos em um mundo de fantasia ..',
            lancamento: '8/fev/2021',
            desenvolvedor: 'Mana Potion Studios'
        },

        {
            imagem: bloodandbacon,
            nome: 'Blood & Bacon',
            estilo: 'Ação',
            valor: '2,19',
            descricao: 'Este Multiplayer "FPS" possui jogabilidade diurna/noturna, os jogadores irão lidar com 35 tipos de inimigos e numerosos chefes. Monstros a cada 10 dias enquanto exploram ..',
            lancamento: '1/fev/2016',
            desenvolvedor: 'Big Corporation'
        },

        {
            imagem: castlecrashers,
            nome: 'Castle Crashers',
            estilo: 'Aventura',
            valor: '24,99',
            descricao: 'Hack, slash, e smash seu caminho para a vitória nesta premiada aventura de arcade 2D de The Behemoth! ..',
            lancamento: '26/set/2012',
            desenvolvedor: 'The Behemoth'
        },

        {
            imagem: citiesskylines,
            nome: 'Cities: Skylines',
            estilo: 'Simulação',
            valor: '55,99',
            descricao: 'Cities: Skylines é uma versão moderna dos simuladores de cidade clássicos.O jogo introduz novos elementos de jogabilidade para que você sinta a emoção e a dificuldade de criar e manter uma cidade de verdade ..',
            lancamento: '10/mar/2015',
            desenvolvedor: 'Colossal Order Ltd.'
        },

        {
            imagem: companyofheroestwo,
            nome: 'Company Of Herores 2',
            estilo: 'Ação',
            valor: '36,99',
            descricao: 'Experimente a melhor plataforma RTS da Segunda Guerra Mundial com COH2 e suas expansões autônomas ..',
            lancamento: '25/jun/2013',
            desenvolvedor: 'Relic Entertainment, Feral Interactive (Mac) & Feral Interactive (Linux)'
        },

        {
            imagem: conanexiles,
            nome: 'Conan Exiles',
            estilo: 'Sobrevivência',
            valor: '99,49',
            descricao: 'Um jogo de sobrevivência, agora com montarias e combate montado. Ambientado nas terras brutais de Conan, o bárbaro. Sobreviva em um mundo vasto, construa seu lar em single player ou multi ..',
            lancamento: '8/mai/2018',
            desenvolvedor: 'Funcom'
        },

        {
            imagem: counterstrike,
            nome: 'Counter-Strike 1.6',
            estilo: 'Ação',
            valor: '20,69',
            descricao: 'Jogue o jogo de ação número 1 no mundo. Junte-se a uma guerra incrivelmente realística contra o terrorismo neste jogo baseado em equipes. Alie-se com os seus colegas e complete missões estratégicas. O sucesso da sua equipe afeta você ..',
            lancamento: '1/nov/2000',
            desenvolvedor: 'Valve'
        },

        {
            imagem: counterstrikeglobaloffensive,
            nome: 'Counter-Strike: Global Offensive',
            estilo: 'Ação',
            valor: '2,99',
            descricao: 'O Counter-Strike: Global Offensive melhora a jogabilidade de ação baseada em equipes. O CS:GO contém novos mapas, personagens e armas, além de contar com versões atualizadas de conteúdos do \'CS\' clássico ..',
            lancamento: '21/ago/2012',
            desenvolvedor: 'Valve & Hidden Path Entertainment'
        },

        {
            imagem: dawnofman,
            nome: 'Dawn Of Man',
            estilo: 'Aventura',
            valor: '47,49',
            descricao: 'Comande um assentamento de humanos antigos, guie-os através dos tempos em sua luta pela sobrevivência. Cace, reúna, crie ferramentas, lute, pesquise novas tecnologias e enfrente os desafios que o meio ambiente vai lançar sobre você ..',
            lancamento: '1/mar/2019',
            desenvolvedor: 'Madruga Works'
        },

        {
            imagem: deadbydaylight,
            nome: 'Dead By Daylight',
            estilo: 'Ação',
            valor: '39,99',
            descricao: 'Dead by Daylight é um jogo de terror multiplayer (4vs1) em que um jogador assume o papel do Assassino selvagem e os outros quatro jogadores como Sobreviventes, tentando escapar do Assassino e evitar serem pegos/mortos ..',
            lancamento: '14/jun/2016',
            desenvolvedor: 'Behaviour Interactive Inc.'
        },

        {
            imagem: deadrising,
            nome: 'Dead Rising',
            estilo: 'Ação',
            valor: '39,99',
            descricao: 'Você é Frank West, um fotojornalista durão, decidido a investigar o mistério do Willamette Mall. Está infestado de zumbis e você tem 72 horas. Corte até cair ..',
            lancamento: '12/set/2016',
            desenvolvedor: 'Capcom'
        },

        {
            imagem: dontstarvetogether,
            nome: 'Don\'t Starve Together',
            estilo: 'Aventura',
            valor: '27,99',
            descricao: 'Don\'t Starve Together é uma expansão multiplayer autônoma para o jogo de sobrevivência em lugares inóspitos, Don\'t Starve ..',
            lancamento: '21/abr/2016',
            desenvolvedor: 'Klei Entertainment'
        },

        {
            imagem: dyinglight,
            nome: 'Dying Light',
            estilo: 'Ação',
            valor: '74,99',
            descricao: 'Um jogo de ação e sobrevivência em primeira pessoa em um mundo aberto pós-apocalíptico tomado por zumbis. Procure por suprimentos, crie armas e enfrente os infectados ..',
            lancamento: '26/jan/2015',
            desenvolvedor: 'Techland'
        },

        {
            imagem: fallguys,
            nome: 'Fall Guys',
            estilo: 'Casual',
            valor: '37,99',
            descricao: 'Fall Guys é um party game para multijogador com até 60 jogadores online, em uma louca corrida free-for-all, com rounds e rounds cada vez mais caóticos até sobrar um único vencedor ..',
            lancamento: '4/ago/2020',
            desenvolvedor: 'Mediatonic'
        },

        {
            imagem: grandtheftautosanandreas,
            nome: 'Grand Theft Auto: San Andreas',
            estilo: 'Ação',
            valor: '13,24',
            descricao: 'Cinco anos atrás, Carl Johnson escapou das pressões da vida em Los Santos, San Andreas, uma cidade se destruindo com problemas de gangues, drogas e corrupção. Agora, é o início dos anos 90. Carl precisa ir para casa ..',
            lancamento: '6/jun/2005',
            desenvolvedor: 'Rockstar Games'
        },

        {
            imagem: grandtheftautov,
            nome: 'Grand Theft Auto V',
            estilo: 'Ação',
            valor: '66,66',
            descricao: 'Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como experimentar o jogo rodando a 60 FPS ..',
            lancamento: '14/abr/2015',
            desenvolvedor: 'Rockstar North'
        },

        {
            imagem: greenhell,
            nome: 'Green Hell',
            estilo: 'Sobrevivência',
            valor: '33,24',
            descricao: 'Green Hell é uma luta sufocante pela sobrevivência na floresta amazônica. À beira da morte, o jogador é colocado em uma jornada de resistência já que os efeitos do isolamento afetam fortemente não só o corpo, mas também a mente ..',
            lancamento: '5/set/2019',
            desenvolvedor: 'Creepy Jar'
        },

        {
            imagem: howtosurvivetwo,
            nome: 'How To Survive 2',
            estilo: 'Sobrevivência',
            valor: '11,99',
            descricao: 'Sobreviva sozinho ou com seus amigos, enquanto tenta suprir suas necessidades básicas, como alimentação, água e moradia, criando suas próprias ferramentas e armas enquanto protege o acampamento contra zumbis esfomeados ..',
            lancamento: '8/set/2016',
            desenvolvedor: 'Eko Software'
        },

    ]

    // Visibilidade BTN Back To Top Page
    const [estaVisivel, setEstaVisivel] = useState(false)

    // Função BTN Back To Top Page
    const scrollToTop = () => {
        window.scrollTo({ top: '0', behavior: 'smooth' })
    }

    // Função BTN Back To Top Page
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 500) {
            setEstaVisivel(true)
        } else {
            setEstaVisivel(false)
        }
    });

    return (

        <div id="container">

            <Header />

            <main id="main">

                <div id="main-icon-and-account" onClick={openModal}>
                    <i><FaUserAlt /></i>
                    <span>Minha conta</span>
                </div>

                <details id="emphasis">
                    <summary>Highlighted ..</summary>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam consectetur tenetur quisquam,
                        libero suscipit quos amet veniam, debitis ab temporibus iste laudantium ipsum. Consequatur, architecto molestias! Aliquid, autem unde!</p>
                </details>

                <div id="menu-aside-and-cards">

                    <div id="menu-aside">

                        <div id="aside-search">
                            <i><BiSearchAlt /></i>
                            <input type="search" placeholder="Realize sua busca" />
                        </div>

                        <ul>
                            <li>Among Us</li>
                            <li>ARK: Survival Evolved</li>
                            <li>Banished</li>
                            <li>Becastled</li>
                            <li>Blood &amp; Bacon</li>
                            <li>Castle Crashers</li>
                            <li>Cities: Skylines</li>
                            <li>Company Of Heroes 2</li>
                            <li>Conan Exiles</li>
                            <li>Counter-Strike 1.6</li>
                            <li>Counter-Strike: Global Offensive</li>
                            <li>Dawn Of Man</li>
                            <li>Dead By Daylight</li>
                            <li>Dead Rising</li>
                            <li>Don't Starve Together</li>
                            <li>Dying Light</li>
                            <li>Fall Guys</li>
                            <li>Grand Theft Auto: San Andreas</li>
                            <li>Grand Theft Auto V</li>
                            <li>Green Hell</li>
                            <li>How To Survive 2</li>
                            <li>Left 4 Dead 2</li>
                            <li>Metal Slug X</li>
                            <li>Need For Speed Heat</li>
                            <li>Need For Speed PayBack</li>
                            <li>Pay Day 2</li>
                            <li>Raft</li>
                            <li>Rise Of The Tomb Raider</li>
                            <li>Road Redemption</li>
                            <li>7 Days To Die</li>
                            <li>Shadow Of The Tomb Raider</li>
                            <li>Speed Runners</li>
                            <li>State Of Decay 2</li>
                            <li>The Forest</li>
                            <li>The Sims 4</li>
                            <li>Valheim</li>
                            <li>Tomb Raider</li>
                            <li>Worms W.M.D</li>
                            <li>Yet Anotther Zombie Defense HD</li>
                        </ul>
                    </div>

                    <div id="all-cards">

                        {games.map((games) => (

                            <div id="thecard" key={games.nome}>

                                <div id="thefront">
                                    <img src={games.imagem} alt="Imagem do Jogo" />

                                    <div id="front-descriptions">
                                        <span id="front-name">{games.nome}</span>
                                        <span id="front-type">{games.estilo}</span>
                                        <span id="front-value">R$ {games.valor}</span>
                                    </div>
                                </div>

                                <div id="theback">

                                    <div id="back-description">
                                        <p><b>Descrição:</b> {games.descricao}</p>
                                    </div>

                                    <div id="back-analytics">
                                        <h4>DATA DE LANÇAMENTO:</h4>
                                        <span>{games.lancamento}</span>
                                    </div>

                                    <div id="back-analytics">
                                        <h4>DESENVOLVEDOR:</h4>
                                        <span>{games.desenvolvedor}</span>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div id="company-info">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore sit delectus omnis
                        repellendus quas eligendi odio doloribus provident. Mollitia beatae porro sed temporibus natus
                        libero,
                        tempora iure aspernatur ipsam..</p>
                </div>

                <div id="company-descriptions">

                    <div id="company-card-description">
                        <i><ImHome /></i>
                        <h2>The Group</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                    <div id="company-card-description">
                        <i><BsInfoCircle /></i>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                    <div id="company-card-description">
                        <i><MdWork /></i>
                        <h2>Our Works</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                    <div id="company-card-description">
                        <i><GoTools /></i>
                        <h2>Services</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                    <div id="company-card-description">
                        <i><FaBlog /></i>
                        <h2>Blog</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                    <div id="company-card-description">
                        <i><RiContactsBookFill /></i>
                        <h2>Contacts</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum. Neque aperiam porro fugiat. Enim corrupti suscipit ad eius,
                            perferendis vel quo ea tempore libero quis, nostrum labore ducimus fugit!</p>
                    </div>

                </div>

                {/* Visibilidade BTN Back Top Top Page */}
                {estaVisivel && (
                    <div className="back-to-top">
                        <i><FiArrowUpCircle onClick={scrollToTop} /></i>
                    </div>
                )}

                <div id="btn-whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=++5511911114444&amp;text=Olá, aqui você pode colocar seu texto inicial já preenchido .." target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Visibilidade MODAL */}
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

            </main>

            <Footer />

        </div>

    );
}