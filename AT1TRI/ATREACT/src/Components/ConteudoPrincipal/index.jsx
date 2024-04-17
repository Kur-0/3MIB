import imgHero from '../../assets/Images/Hero image.png'

function Principal(){
    return(
        <main>
            <div className="textinho">
                <h1 id="titulo" >Crie seus vídeos online</h1>
                <p id="pSubtitulo" >Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                <button>Começar agora!</button>
            </div>
            {/* <img src="../Images/Hero image.png" alt="Imagenzona Bala" /> */}
            <img id='imghero' src={imgHero} alt="Imagenzona Bala" />
        </main>
    );
}

export default Principal;