import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )

}
const Dialogs = () => {
   let dialogsData = [
        {id:1, name: 'Dimych'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Natasha'},
        {id:4, name: 'Sveta'},
        {id:5, name: 'Marina'},
        {id:6, name: 'Valera'}

    ]

    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'How is your it-kamasutra'},
        {id:3, message: 'Yo'},
        {id:4, message: 'Yo'},
        {id:5, message: 'Yo'},
        {id:6, message: 'Yo'}
]
    let dialogsElements = dialogsData.map(d => 
    <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messagesData.map(m => 
        <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}                
            </div>
        </div>
    )
}

export default Dialogs;