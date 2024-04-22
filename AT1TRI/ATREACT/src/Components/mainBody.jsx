import dataCards from "../../src/App"
import Cards from "./Cards"
import Principal from "./ConteudoPrincipal"


function MainBody(){
    return(
        <>
        <div className="MainBody">
        <Principal></Principal>
        </div>
        <Cards propsCards= {dataCards}></Cards>
        </>
    )
}
export default MainBody