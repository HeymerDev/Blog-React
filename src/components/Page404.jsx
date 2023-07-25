import page from "../assets/images/404 error lost in space-cuate.svg";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="center">
      <h2 className="subheader">Not Found</h2>
      <picture>
        <img src={page} alt="page not found" />
      </picture>
      <button>
        <Link to="/blog" className="link-without-decoration">
          Ir Al Blog
        </Link>
      </button>
    </div>
  );
};

export default Page404;
