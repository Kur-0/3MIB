export default function Contato(){
    return(
        <div className={`bg-contato ${location.pathname === '/contato' ? 'bg-contato' : ''}`}>

            <h1 className="font-jacques text-white text-[50px] mt-[227px] ml-[196px]">Fale Com a Gente!</h1>
            <div className="flex justify-center items-center">
                <form className="flex flex-col w-[734px] mt-[49px]" action="post" method="post">
                    <label htmlFor="titulo" className="font-jacques text-white text-[20px] bg-teal-500 h-[47px] rounded-t-[30px] flex items-center">Formulário de Contato:</label>
                    <input className="font-jacques text-[20px] border-x-2 border-t-2 border-teal-500 h-[34px]" type="text" name="email" id="email" placeholder="Seu Email:" />
                    <input className="font-jacques text-[20px] border-2 border-teal-500 h-[44px]" type="text" name="assunto" id="assunto" placeholder="Assunto:" />
                    <textarea placeholder="Sua Mensagem:" name="mensagem" id="mensagem" className="font-jacques text-[20px] border-x-2 border-b-2 border-teal-500 h-[335px] rounded-b-[30px]"></textarea>
                    <div className="flex justify-end mt-[16px]">
                        <button className="font-jacques w-[199px] h-[57px] text-white text-[20px] rounded-[40px] bg-teal-500 flex items-center justify-center" value="Enviar"type="submit">Enviar:</button>
                    </div>
                </form>
            </div>
        </div>
    );
}