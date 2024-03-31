import { FaRegCheckCircle } from "react-icons/fa";
// <FaRegCheckCircle />
import { FaTimesCircle } from "react-icons/fa";
// <FaTimesCircle />
import { FaExclamation } from "react-icons/fa";
//<FaExclamation />



function Notification({ text, type }) {
  const outputIcon = () => {
    if(type === 'success') {
      return <FaRegCheckCircle />
    } if(type === 'warning') {
      return <FaTimesCircle />
    } else {
      return <FaExclamation />
    }
  }

  return (
    <div className={`notification ${type}`}>
      <div>{outputIcon()}</div>
      <p>{text}</p>
    </div>
  );
}

export default Notification;
