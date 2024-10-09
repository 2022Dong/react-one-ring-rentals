import logo from '../assets/images/logo.png';
import Copyright from './Copyright';
import regionsData from '../data/regions.json';

const Footer = () => {
  return (
    <footer id="footer">
        <div id="footer-top" className="container">
          <div className="row">
            <div className="block col-sm-3">
              <a href="#"
                ><img src={logo} alt="One Ring Rentals"
              /></a>
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
                <li><a href="#">All rentals</a></li>
                <li><a href="#">List your rental</a></li>
                <li><a href="#">Read our FAQs</a></li>
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
                        <a href={region.link}>
                          <img src={region.image} alt={region.name} />
                        </a>
                      </div>
                      <p><a href={region.link}>{region.name}</a></p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regionsData.slice(3, 6).map((region) => (
                    <li key={region.name}>
                      <div className="image">
                        <a href={region.link}>
                          <img src={region.image} alt={region.name} />
                        </a>
                      </div>
                      <p><a href={region.link}>{region.name}</a></p>
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
                    <a href="#"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-google"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-rss"></i></a>
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