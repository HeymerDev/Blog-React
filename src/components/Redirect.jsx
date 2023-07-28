import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
  /* `const { search } = useParams();` is using the `useParams` hook from the `react-router-dom`
  library to extract the value of the `search` parameter from the URL. It allows the component to
  access the value of the `search` parameter that was passed in the URL. */
  const { search } = useParams();
  const navigate = useNavigate();

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is used to navigate to a specific URL when the component is rendered. */
  useEffect(() => {
    navigate(`/blog/search/${search}`);
  }, []);

  return null;
};

export default Redirect;
