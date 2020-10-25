import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';


const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar_user" />
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>

}
export default DialogItem;