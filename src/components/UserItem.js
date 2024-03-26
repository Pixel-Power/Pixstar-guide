import { Link } from "react-router-dom";

function UserItem({main}) {
    return(
        <Link to={`/main/${main.userCode}`}>
            
        </Link>
    )
}