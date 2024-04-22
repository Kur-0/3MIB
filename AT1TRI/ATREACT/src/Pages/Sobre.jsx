import imgPhone from '../assets/Images/Viseo Merge screen 1.png'
import imgCardSobre from '../assets/Images/undraw_Mobile_feed_re_72ta 1.png'
import imgPhone2 from '../assets/Images/Saved 1.png'
import imgCard1 from '../assets/Images/Frame 14468.png'
import imgCard2 from '../assets/Images/Frame 14469.png'
import imgCard3 from '../assets/Images/Frame 14470.png'


function Principal(){
    return(
        <>
            <main id='mainSobre'>
                <div className="textinho">
                    <h1 id="titulo" >Bem-vindo à revolução dos vídeos!</h1>
                    <p id="pSubtitulo" >Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                    <button>Baixe o app</button>
                </div>
                {/* <img src="../Images/Hero image.png" alt="Imagenzona Bala" /> */}                  
                <img id='imgphone' src={imgPhone} alt="Imagenzona Bala" />
                <img id='imgphone2' src={imgPhone2} alt="Imagenzona Bala" />
            </main>
            <footer>
                <h4 id='planos' href="">Planos</h4>
                
                <div className="cardsSobre">
                    <div className="cardSobre1">
                        <p id='cardSobre'>Individual</p>
                        <div className="centroCardSobre1">
                            <h5>1 Usuário</h5>
                            <input type="search" name="searchSobre" id="searchSobre" placeholder='18 Vídeos R$15' />
                            <button id='btnCardSobre1'>Cadastrar</button>
                        </div>
                    </div>

                    <div className="cardSobre2">
                        <p id='cardSobreTitulo'>Profissional - Times</p>
                        <div className="centroCardSobre1">
                            <h5>1 - 10 Usuários</h5>
                            <input type="search" name="searchSobre" id="searchSobre" placeholder='Vídeos Ilimitados R$40' />
                            <h5>+ 10 Usuários</h5>
                            <input type="search" name="searchSobre" id="searchSobre" placeholder='Vídeos Ilimitados R$20' />
                            <button id='btnCardSobre2'>Cadastrar</button>
                        </div>
                    </div>

                    <div className="cardSobre1">
                        <p id='cardSobreTitulo'>Corporativo</p>
                        <div className="centroCardSobre1">
                            <img src={imgCardSobre} alt="" />
                            <button id='btnCardSobre2'>Entre Em Contato</button>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    );
}

export default Principal;