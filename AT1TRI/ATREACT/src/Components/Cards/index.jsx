import imgYt from '../../assets/Images/yt.png'
import imgTktk from '../../assets/Images/tktk.png'
import imgFcb from '../../assets/Images/fcb.png'
import imgIns from '../../assets/Images/ins.png'

function Cards(){
    return(
        <footer id="footerCards">
            <div className="card1">
                <div className="nseiainda">
                    <div className="headerCard">
                        <h1 id="h1Card">01</h1>
                        <img id='iconCard' src={imgYt} alt="youtebas" />
                    </div>
                    <h2 id="h2Card">Youtube</h2>
                    <p id="pCard">Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                </div>
                
            </div>

            <div className="card2">
                <div className="nseiainda">
                    <div className="headerCard">
                        <h1 id="h1Card">02</h1>
                        <img id='iconCard' src={imgTktk} alt="tecoteco" />    
                    </div>  
                    <h2 id="h2Card">Tiktok</h2>
                    <p id="pCard">Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                </div>
                            
            </div>

            <div className="card3">
                <div className="nseiainda">
                    <div className="headerCard">
                        <h1 id="h1Card">03</h1>
                        <img id='iconCard' src={imgFcb} alt="facee" />   
                    </div>
                    <h2 id="h2Card">Facebook</h2>
                    <p id="pCard">Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                </div>
                           
            </div>

            <div className="card4">
                <div className="nseiainda">
                    <div className="headerCard">
                        <h1 id="h1Card">04</h1>
                        <img id='iconCard' src={imgIns} alt="insta" />  
                    </div>
                    <h2 id="h2Card">Instagram</h2>
                    <p id="pCard">Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                </div>
                            
            </div>

        </footer>

    );
}

export default Cards;