import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://u-stena.ru/upload/iblock/697/69702d59285e3f57fd0e92df595b3d5b.jpg' className={s.mainPhoto} />
            </div>
            <div className={s.descriptionBlock}>
                <img src ={props.profile.photos.small} className={s.userPhoto}/>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
