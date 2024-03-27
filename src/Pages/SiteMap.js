import './allCss.module.css';

function SiteMap() {

    return (
        <>
            <div className={siteMapStyles.siteMapbox}>
                <div className={siteMapStyles.titlebox}></div>
                <p id="Title">사이트맵</p>
                <p id="Titleinfo">픽스타 사이트의 모든 메뉴를 한눈에 보실 수 있습니다.</p>
            </div>
            <div className={siteMapStyles.firstbox}>
                <p id="miniTitle">마이페이지</p>
                <Link to={'/signup'}>회원가입</Link>
                <Link to={'/mypage-mem'}>회원정보</Link>
                <Link to={'/signup'}>리뷰확인</Link>
            </div>
            <div className={siteMapStyles.secondbox}>
                <p id="miniTitle">제휴서비스</p>
                <Link to={'/signup'}>MD 상품 이용안내</Link>
                <Link to={'/signup'}>문의 게시판</Link>
            </div>
            <div className={siteMapStyles.thirdbox}>
                <p id="miniTitle">픽스타</p>
                <Link to={'/signup'}>히스토리</Link>
                <Link to={'/signup'}>선정맛집</Link>
                <Link to={'/signup'}> 참여단 게시판</Link>
            </div>
        </>
    );
}

export default SiteMap;