import imgPhone from '../assets/Images/Viseo Merge screen 1.png'
import imgPhone2 from '../assets/Images/Saved 1.png'

function Principal(){
    return(
        <main>
            <div className="textinho">
                <h1 id="titulo" >Bem-vindo à revolução dos vídeos!</h1>
                <p id="pSubtitulo" >Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                <button>Baixe o app</button>
            </div>
            {/* <img src="../Images/Hero image.png" alt="Imagenzona Bala" /> */}                  
            <img id='imgphone' src={imgPhone} alt="Imagenzona Bala" />
            <img id='imgphone2' src={imgPhone2} alt="Imagenzona Bala" />
        </main>
    );
}

export default Principal;