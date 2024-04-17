

export default function Cards(props){
    return(
        <footer>
        {props.propsCards.map((element)=>(
            <div id={element.corFundo} className="card1"   key={element.id}>
                <div className="infoCard">
                    <h1 id="h1Card">{element.numero}</h1>
                    <h2 id="h2Card">{element.plataforma}</h2>
                    <p id="pCard">{element.frase}</p>
                </div>
                <img src={element.imgLogo} alt="Jj"/>
            </div>
        ))}
        </footer> 
    );
}
