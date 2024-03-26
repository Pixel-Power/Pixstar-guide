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
            <div className={a.navBox} style={{textAlign: 'center'}}>
            <img src='/images/header-images/pixstar-guide-logo.png' alt='픽스타로고' className={a.sidelogo} style={{width: '100px', height: 'auto', display:'block',margin: '20px auto'}}></img>
                <div class={a.nav__list}>
                    <label type='button' className={a.nav__linkActive} onClick={onClickHandler}>해시태그별</label>
                    <ul className={isOpen? `${a.nav__linkCollapse}${a.showNav}` : `${a.nav__linkCollapse}`}>
                        {isOpen && ( 
                            <>
                            <li className={a.nav_list}><a href='#' className={a.nav_name}>#분좋카</a></li>
                            <li className={a.nav_list}><a href='#' className={a.nav_name}>#오마카세</a></li>
                            <li className={a.nav_list}><a href='#' className={a.nav_name}>#회식</a></li>
                            <li className={a.nav_list}><a href='#' className={a.nav_name}>#갓성비</a></li>
                            <li className={a.nav_list}><a href='#' className={a.nav_name}>#맛도링</a></li>
                            </>
                        )
                        }
                    </ul>
                    <label type='button' className={a.nav__linkActive} onClick={onClickHandler}>가격별</label><br/>
                    <label type='button' className={a.nav__linkActive} onClick={onClickHandler}>픽스타별</label>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Sidebar1;