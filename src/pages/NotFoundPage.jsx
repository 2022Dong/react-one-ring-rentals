import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <FaExclamationTriangle className="text-warning mb-4" style={{ fontSize: '4rem' }} />
      <h1 className="display-1 fw-bold mb-3">404 Not Found</h1>
      <p className="fs-4 mb-4">This page does not exist</p>
      <Link
        to="/"
        className="btn btn-primary px-4 py-2"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
