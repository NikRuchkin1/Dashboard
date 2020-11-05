import React from 'react'
import Albums from './Albums'

function Header() {

    return (
        <div className="Header">
            <div className='header_box'>
                <ul className='noteHeader'>
                    <li>
                        Главная
                    </li>
                    <li>
                        Пользователи
                    </li>
                    <li>
                        Альбомы
                    </li>
                </ul>
            </div>
            <div className='header_photo'>
                <Albums/>
            </div>
        </div>
    )
}

export default Header
