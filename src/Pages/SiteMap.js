import siteMapStyles from './SiteMap.module.css';

function SiteMap() {

    return (
        <>
            <div className={siteMapStyles.titlebox}>
                <p id="Title" style={{fontSize:'20pt', fontWeight:'bold'}}>사이트맵</p>
                <p id="Titleinfo">픽스타 사이트의 모든 메뉴를 한눈에 보실 수 있습니다.</p>
            </div>
            <div className={siteMapStyles.siteMapbox}>
                <div className={siteMapStyles.firstbox}>
                    <a href="/MyPage" style={{fontSize:'15pt', fontWeight:'bold'}}>마이페이지</a>
                    <p>회원가입</p>
                    <p>회원정보</p>
                    <p>리뷰확인</p>
                </div>
                <div className={siteMapStyles.secondbox}>
                    <a style={{fontSize:'15pt', fontWeight:'bold'}}>제휴서비스</a>
                    <p>MD 상품 이용안내</p>
                    <p>문의 게시판</p>
                </div>
                <div className={siteMapStyles.thirdbox}>
                    <a href="/Company-info" style={{fontSize:'15pt', fontWeight:'bold'}}>픽스타</a>
                    <p>히스토리</p>
                    <p>선정맛집</p>
                    <p>참여단 게시판</p>
                </div>
            </div>
        </>
    );
}

export default SiteMap;