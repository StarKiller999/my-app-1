import React from "react";
import preloader from '../../../assets/images/circle.gif'

import s from './Preloader.module.css';

let Preloader = (props) => {
    return <div styles={{backgroundColor: 'white'}}> 
    <img src={preloader}className={s.loadig} />
    </div>

}
export default Preloader;