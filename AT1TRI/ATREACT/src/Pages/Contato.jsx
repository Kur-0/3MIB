import imgTwt from '../assets/Images/Group 1000001749.png'
import imgIns from '../assets/Images/Group 1000001750.png'
import imgDis from '../assets/Images/Group 1000001751.png'



function PrincipalContato(){
    return(
        <>
            <main id='mainDoMainContato'>
                <div id='mainContato'>
                    <h1 id="titulo" >Dúvidas e suporte, entre em contato:</h1>
                    <div className="leftContato">
                        <img id='iconContato' src={imgTwt} alt="iconezin"/>
                        <img id='iconContato' src={imgIns} alt="iconezin"/>
                        <img id='iconContato' src={imgDis} alt="iconezin"/>
                    </div>
                </div>
                <form>
                    <div className="nome">
                        <label id="nome" for="nome">Nome:</label>
                        <input id='caixaNome' type="text" required/>
                    </div>
                    <div className="email">
                        <label id="email" for="email">Email:</label>
                        <input id='caixaEmail' type="email" required/>
                    </div>
                        <label id="mensagem" for="mensagem">Mensagem:</label>
                        <textarea id='caixaMensagem' required></textarea>
                    <input id='envioForms' type="submit" value="Enviar"/>
                </form>
            </main>
        </>
    );
}

export default PrincipalContato;