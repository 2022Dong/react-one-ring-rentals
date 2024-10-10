import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useState } from 'react';
const Hearder = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => { 
    const params = {}
    e.preventDefault();
    if (searchInput) params.data = searchInput;
  }

  return (
    <header id="header">
    <div id="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul id="top-buttons">
              <li>
                <Link to="#"><i className="fa fa-sign-in"></i> Login</Link>
              </li>
              <li>
                <Link to="#"
                  ><i className="fa fa-pencil-square-o"></i> Register</Link>
              </li>
              <li className="divider"></li>
              <li>
                <div className="language-switcher">
                  <span><i className="fa fa-globe"></i> English</span>
                  <ul>
                    <li><Link to="#">Deutsch</Link></li>
                    <li><Link to="#">Espa&ntilde;ol</Link></li>
                    <li><Link to="#">Fran&ccedil;ais</Link></li>
                    <li><Link to="#">Portugu&ecirc;s</Link></li>
                  </ul>
                </div>
              </li>

              {/* <!-- BOOTSTRAP SEARCH BEGINS

                            <li>
                            <form id="site-search">
                                <span><i className="fa fa-search"></i></span>
                                <input type="text" name="q" placeholder="Search">
                            </form>	
                            </li> 

                            BOOTSTRAP SEARCH ENDS --> */}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="nav-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link to="/" className="nav-logo"
              ><img src={logo} alt="One Ring Rentals"
            /></Link>
            {/* <!-- BEGIN SEARCH --> */}
            <div id="sb-search" className="sb-search">
              <form onSubmit={handleSubmit}>
                <input
                  className="sb-search-input"
                  placeholder="Search..."
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  name="search"
                  id="search"
                />
                <input className="sb-search-submit" type="submit" value="" />
                <i className="fa fa-search sb-icon-search"></i>
              </form>
            </div>
            {/* <!-- END SEARCH --> */}
            {/* <!-- BEGIN MAIN MENU --> */}
            <nav className="navbar">
              <button id="nav-mobile-btn">
                <i className="fa fa-bars"></i>
              </button>

              <ul className="nav navbar-nav">
                <li><Link to="/">Find a Rental</Link></li>
                <li><Link to="#">List your rental(TODO)</Link></li>
                <li><Link to="#">Travel Guides(TODO)</Link></li>
                <li><Link to="regions">Regions</Link></li>
                <li><Link to="news">News</Link></li>
                <li><Link to="contact">Contact</Link></li>
              </ul>
            </nav>
            {/* <!-- END MAIN MENU --> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Hearder
