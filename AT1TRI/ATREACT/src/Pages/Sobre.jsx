import imgPhone from '../assets/Images/Viseo Merge screen 1.png'
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
                    <img id='imgCardSobre1' src={imgCard1} alt="cardUAUU"/>
                    <img id='imgCardSobre2' src={imgCard2} alt="cardUAUU"/>
                    <img id='imgCardSobre3' src={imgCard3} alt="cardUAUU"/>
                </div>
            </footer>
        </>
    );
}

export default Principal;