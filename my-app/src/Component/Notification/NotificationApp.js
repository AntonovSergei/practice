import Notification from "./Notification";
import './notification.css';


function NotificationApp(){

  return(
    <div className='notificationApp'>
      <p>Уведомление</p>
      <Notification text='dfhddj' type='success' />
    </div>
  )
}

export default NotificationApp;