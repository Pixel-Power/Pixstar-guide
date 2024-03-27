import { Link } from "react-router-dom";

function UserItem({user}) {
    return(
        <Link to={`/main/${user.userCode}`}>
            
        </Link>
    )
}

export default UserItem;