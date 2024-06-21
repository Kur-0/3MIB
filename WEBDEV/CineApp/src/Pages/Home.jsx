import data from '../../artigos.json'
function Home() {
    return ( 
        <>
            <div className="w-10 h-8">
                <img src={theme.backgroundImage.violet} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(filme => (
                        <div className="card" key={filme.title}>
                        <h1> {filme.title} </h1>
                        <img className='mb-2' src={filme.image} alt={filme.title}/>
                            <div className='tag'>
                                {filme.tags.map(tag =>(
                                        <span className='bg-purple-600 p-1 m-1 rounded-lg text-white' key = {tag}> {tag} </span>
                                    ))}
                            </div>
                            <div className="texto">
                                {filme.text.map( texto => (
                                <p key={texto}> {texto} </p>
                        ))}
                    </div>
                        </div>
                    ))}
                    
            </div>
        </>
     );
}

export default Home;