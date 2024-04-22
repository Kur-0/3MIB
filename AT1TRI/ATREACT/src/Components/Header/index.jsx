import {Link} from 'react-router-dom'

function Header() {
  return (

      <header>
        <nav className="header">              
            <a><Link to="/">Home</Link></a>
            <a><Link to="/AppSobre">Sobre</Link></a>
            <a><Link to="/AppContato">Contato</Link></a>            
        </nav>
      </header>


  );
}

export default Header;