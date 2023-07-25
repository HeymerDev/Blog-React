import { Link } from "react-router-dom";

const Slider = ({ title, btn, size }) => {
  return (
    <>
      <div id="slider" className={size}>
        <h1>{title}</h1>
        {btn && (
          <Link to="/blog" className="btn-white">
            {btn}
          </Link>
        )}
      </div>
    </>
  );
};

export default Slider;
