import { createSlice } from "@reduxjs/toolkit";


const messgesSlice = createSlice({
    name: 'messages',
    initialState: {
        currentDialog: [],
        activeUserId: '',
        allMessages: []
    },
    reducers: {
        toggleActive(state, {payload: {id, fromID}}) {
            state.activeUserId = id
            state.currentDialog = [
                ...state.allMessages.filter(mess => (mess.toID === id && mess.fromID === fromID) || 
                                            (mess.toID === fromID && mess.fromID === id))
            ]
        },
        addNewMessage(state, {payload: {fromID, txt}}){
            const currentMessage = {
                fromID, txt, 
                toID: state.activeUserId,
                id: new Date().getTime().toString()
            }
            state.allMessages.push({...currentMessage})
            state.currentDialog.push({...currentMessage})
        },
        reset(state){
            state.activeUserId = ''
            state.currentDialog = []
        }
    }
})

export const selectMessage = state => state.messages

export const {toggleActive, addNewMessage, reset} = messgesSlice.actions

export const messagesReducer = messgesSlice.reducer