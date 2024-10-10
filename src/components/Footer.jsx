import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Copyright from './Copyright';
import regionsData from '../data/regions.json';

const Footer = () => {
  return (
    <footer id="footer">
        <div id="footer-top" className="container">
          <div className="row">
            <div className="block col-sm-3">
              <Link to="#"
                ><img src={logo} alt="One Ring Rentals"
              /></Link>
              <br /><br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                volutpat quam dignissim, convallis elit id, efficitur sem.
                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                pellentesque nec at metus.
              </p>
            </div>
            <div className="block col-sm-3">
              <h3>Helpful Links</h3>
              <ul className="footer-links">
                <li><Link to="#">All rentals</Link></li>
                <li><Link to="#">List your rental</Link></li>
                <li><Link to="#">Read our FAQs</Link></li>
              </ul>
          </div>
          

          <div className="block col-sm-6">
            <h3>Popular Regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regionsData.slice(0, 3).map((region) => (
                    <li key={region.name}>
                      <div className="image">
                        <Link to={region.link}>
                          <img src={region.image} alt={region.name} />
                        </Link>
                      </div>
                      <p><Link to={region.link}>{region.name}</Link></p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regionsData.slice(3, 6).map((region) => (
                    <li key={region.name}>
                      <div className="image">
                        <Link to={region.link}>
                          <img src={region.image} alt={region.name} />
                        </Link>
                      </div>
                      <p><Link to={region.link}>{region.name}</Link></p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* <!-- BEGIN COPYRIGHT --> */}
        <div id="copyright">
          <div className="container">
            <div className="row">
            <div className="col-sm-12">
              <Copyright />            

                {/* <!-- BEGIN SOCIAL NETWORKS --> */}
                <ul className="social-networks">
                  <li>
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="fa fa-google"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="fa fa-pinterest"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="fa fa-youtube"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="fa fa-rss"></i></Link>
                  </li>
                </ul>
                {/* <!-- END SOCIAL NETWORKS --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END COPYRIGHT --> */}
      </footer>
  )
}

export default Footer