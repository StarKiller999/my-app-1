import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateProps=(state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
            updateNewMessageBody: (body) =>{
                dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;