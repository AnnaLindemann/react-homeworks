import { useNavigate } from "react-router";
import { useEffect } from "react";
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <>
      <h1>Not Found Page</h1>
      <p>
        You have got not found page. After 3 second u will be navigated to home
        page
      </p>
    </>
  );
}
export default NotFound;