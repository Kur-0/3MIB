import Cards from "./Components/Cards"
import Principal from "./Components/ConteudoPrincipal"
import Header from "./Components/Header"


function App(){

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Contato', link: '/contato' },
  ];

  const dataCards= [
    {numero: "01", plataforma: "Youtube",
    frase: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.", 
    imgLogo: "./assets/Images/Ellipse27.png", 
    corFundo: "fundoVermelho"},

    {numero: "02",
    plataforma: "Tiktok",
    frase: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
    imgLogo: "./Components/Images/Ellipse 26.png",
    corFundo: "fundoAmarelo"},

    {numero: "03",
    plataforma:"Facebook",
    frase: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
    imgLogo:"./Components/Images/Ellipse 26 (1).png",
    corFundo: "fundoAzul"},

    {numero: "04",
    plataforma: "Instagram",
    frase: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
    imgLogo:"./Components/Images/Ellipse 27 (1).png",
    corFundo: "fundoRoxo"},
  ]


  return (
    <>
    <Header menuItems={menuItems}></Header>
    <Principal></Principal>
    <Cards propsCards= {dataCards}/>
    </>
  )
}

export default App