import aqua from '/aqua.png'
import noticiasData from '/noticias.json';
import { useState, useEffect } from "react";

export default function Noticias(){

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        // Simulação de fetch ou carregamento de dados assíncronos
        setNoticias(noticiasData);
    }, []);

    return(
        <div className={`bg-noticias ${location.pathname === '/noticias' ? 'bg-noticias' : ''}`}>
            <div className="flex justify-center items-center mt-12">
                <div className=" mx-auto">
                    <h1 className="font-jacques text-center text-teal-500 text-[50px] mb-8">Destaques!</h1>
                    {noticias.map((noticia) => (
                        <div key={noticia.id} className="w-[700px] my-4 p-4 border border-teal-400 rounded-lg">
                        <h2 className="text-lg text-teal-500 font-semibold font-jacques">{noticia.titulo}</h2><br />
                        <p className="text-sm font-jacques">{noticia.data} - Fonte: {noticia.fonte}</p> <br /><br />
                        <p className="text-base font-jacques">{noticia.descricao}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="font-jacques text-center text-teal-500 text-[50px] mb-8">Notas Da <br /> Comunidade</h1>
                    <div className="flex">
                        <img src={ aqua } alt="aquaaa" />
                        <p className="font-jacques text-[20px] w-[346px]">É com grande entusiasmo que anunciamos o lançamento oficial da Animex, a mais nova plataforma de streaming dedicada exclusivamente aos fãs de anime no Brasil. Nossa missão é proporcionar uma experiência de visualização de alta qualidade, com uma vasta seleção de animes para todos os gostos e idades.
                        Para mais informações, entre em contato com nossa equipe de comunicação em [email@animex.com].<br /><br />Agradecemos a todos pelo apoio e estamos ansiosos para vê-los na Animex!<br /><br />🩵🩵🩵🩵🩵🩵   Animex   🩵🩵🩵🩵🩵🩵</p>
                    </div>
                </div>
            </div>
        </div>
    );
}