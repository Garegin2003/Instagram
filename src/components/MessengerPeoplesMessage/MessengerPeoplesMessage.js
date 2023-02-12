import { useDispatch, useSelector } from 'react-redux'
import { selectMessage, toggleActive, toggleCurrentDialog } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,id,img}) {

	const message = useSelector(selectMessage)
	const dispatch = useDispatch()
	const { currentUser } = useSelector(selectUsers)
	function clickHandler() {
		dispatch(toggleActive({id, fromID: currentUser.id}))
	}
  return (
	 <div onClick={clickHandler} style={{backgroundColor: message.activeUserId === id ? 'darkgrey' : ''}} className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
