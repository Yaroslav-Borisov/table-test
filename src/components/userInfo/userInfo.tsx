import { UserInfoPropsType } from './userInfo.props';
import style from './userInfo.module.css';


export const UserInfo = ({user}: UserInfoPropsType) => {

    return (
        <>
            {user.firstName !== '' && 
                <div>
                    <div>
                        <span className={style['title']}>Выбран пользователь: </span>
                        <b>{user.firstName}</b>
                    </div>
                    <div>
                        <span className={style['title']}>Описание:</span>
                    </div>
                    <textarea className={style['textarea']} value={user.description} readOnly>
                    </textarea>
                    <div>
                        <span className={style['title']}>Адрес проживания:</span>
                        <b>{user.address.streetAddress}</b>
                    </div>
                    <div>
                        <span className={style['title']}>Город:</span>
                        <b>{user.address.city}</b>
                    </div>
                    <div>
                        <span className={style['title']}>Провинция/штат:</span>
                        <b>{user.address.state}</b>
                    </div>
                    <div>
                        <span className={style['title']}>Индекс:</span>
                        <b>{user.address.zip}</b>
                    </div>
                </div>
            }
        </>
    );
};

