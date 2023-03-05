import "./NotFound.scss"
import { useNavigate } from 'react-router-dom';
import errorImg from "../../assets/img/404.png"
const NotFound = () => {
      const navigate = useNavigate();
  return (
    <div className="container ">
      <img className="w-75" src={errorImg} alt="" />
      <div>
        <button className="btn " onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn1" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
export default NotFound