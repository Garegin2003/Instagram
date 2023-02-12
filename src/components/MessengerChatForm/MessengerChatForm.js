import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addNewMessage, selectMessage, toggleCurrentDialog, toggleMessage } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useRef } from 'react'

function MessengerChatForm() {
	const dispatch = useDispatch()
	const message = useSelector(selectMessage)
	const { currentUser } = useSelector(selectUsers)
	const formRef = useRef(null)

	const handlerSubmit = e => {
		e.preventDefault()
		const txt = formRef.current[0].value
		dispatch(addNewMessage({
			txt,
			fromID: currentUser.id
		}))

		formRef.current.reset()
		
	}

  return (
	 <div className='Chat-input'>
		<form ref={formRef} onSubmit={handlerSubmit} >
			<input type='text' placeholder='Message...'/>
			<img src={IMAGES.like} alt=''/>
		</form>
	 </div>
  )
}

export default MessengerChatForm
