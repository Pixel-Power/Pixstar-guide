import { useState } from 'react';
import a from './Sidebar1.module.css'
/* EXPANDER MENU */

function Sidebar1() {
    
        const[isOpen, setIsOpen] = useState(false);

        const onClickHandler = () => {
            setIsOpen(isOpen=>!isOpen);
        };


    return(
        <div class={a.l_navbar}>
        <nav class={a.nav}>
            <div className={a.navBox}>
                <div class={a.nav__list}>
                    <button type='button' className={a.nav__linkActive} onClick={onClickHandler}>해시태그별</button>
                    <ul className={isOpen? `${a.nav__linkCollapse}${a.showNav}` : `${a.nav__linkCollapse}`}>
                        {isOpen && ( 
                            <>
                            <li><a href='#' className={a.nav_name}>#분좋카</a></li>
                            <li><a href='#' className={a.nav_name}>#오마카세</a></li>
                            <li><a href='#' className={a.nav_name}>#회식</a></li>
                            <li><a href='#' className={a.nav_name}>#갓성비</a></li>
                            <li><a href='#' className={a.nav_name}>#맛도링</a></li>
                            </>
                        )
                        }
                    </ul>

                    <div href="#" class={a.nav__linkCollapse}>
                        <ion-icon name="folder-outline" class={a.nav__icon}></ion-icon>
                        <span class={a.nav_name}>가격별</span>

                        <ion-icon name="chevron-down-outline" class={a.collapse__link}></ion-icon>

                        <ul class={a.collapse__menu}>
                            <a href="#" class={a.collapse__sublink}>Data</a>
                            <a href="#" class={a.collapse__sublink}>Group</a>
                            <a href="#" class={a.collapse__sublink}>Members</a>
                        </ul>
                    </div>

                    <div href="#" class={a.nav__linkCollapse}>
                        <ion-icon name="people-outline" class={a.nav__icon}></ion-icon>
                        <span class={a.nav_name}>픽스타별</span>

                        <ion-icon name="chevron-down-outline" class={a.collapse__link}></ion-icon>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Sidebar1;