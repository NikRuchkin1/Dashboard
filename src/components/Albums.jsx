import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from '../redux/action/user'

function Albums() {
    const {users} = useSelector(({ userReducer }) => userReducer);
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(setUser())
    }, []);
    return (
        <div>
            <div className='card_user'>
                
            </div>
        </div>
    )
}

export default Albums
