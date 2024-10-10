import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Copyright from "../components/Copyright";
import SectionTitle from "../components/SectionTitle";

const NotFoundPage = () => {
  return (
    <div class="content">
        <div class="container">
          <div class="row">
            <div class="main col-sm-12"></div>
              <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
              <FaExclamationTriangle className="text-warning mb-4" style={{ fontSize: '4rem' }} />
              <SectionTitle title="Not Found" />
              <p className="fs-4 mb-4">This page does not exist</p>
              <Link
              to="/"
              className="btn btn-primary px-4 py-2"
              >
              Go Back
              </Link>     
              </section>
              <Copyright />
          </div>
        </div>
      </div> 
  );
};

export default NotFoundPage;
