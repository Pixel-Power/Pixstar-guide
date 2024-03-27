import './Footer.module.css';
import { Link } from 'react-router-dom';
function Footer() {

    return (
        <footer>
            <div>
                <Link to={'/useterms'}>이용약관</Link>
                <p> | </p>
                <Link to={'/privacy'}>개인정보처리방침</Link>
                <p> | </p>
                <Link to={'/siteMap'}>사이트맵</Link>
                <br />
                <br />
                <a>@CopyRight 2024. PixStar Co. | </a>
                <a>사업자등록번호 : 222-222-222 | </a>
                <a>통신판매업 신고번호 : 2024-서울강남-11111호 | </a>
                <br />
                <br />
                <a>고객센터 02-1234-5678</a>
            </div>
        </footer>
    );
}

export default Footer;