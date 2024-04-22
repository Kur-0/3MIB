import imgTwt from '../assets/Images/Group 1000001749.png'
import imgIns from '../assets/Images/Group 1000001750.png'
import imgDis from '../assets/Images/Group 1000001751.png'



function PrincipalContato(){
    return(
        <>
            <main id='mainContato'>
                <h1 id="titulo" >Dúvidas e suporte, entre em contato:</h1>
                <div className="leftContato">
                    <img id='iconContato' src={imgTwt} alt="iconezin"/>
                    <img id='iconContato' src={imgIns} alt="iconezin"/>
                    <img id='iconContato' src={imgDis} alt="iconezin"/>
                </div>

            </main>
        </>
    );
}

export default PrincipalContato;