function Header() {
    return (
        
        <header>
          <nav className="header">  

          {menuItems.map((menuItem, index) => (
            <ul>
              <li key={index}>
                <Link to={menuItem.link}>{menuItem.text}</Link>
              </li>
            </ul>
          ))}          
          </nav>
        </header>
      
      
    );
  }
  
  export default Header;
  