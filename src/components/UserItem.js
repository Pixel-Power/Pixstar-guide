import { Link } from "react-router-dom";

function UserItem({user}) {
    return(
        <Link to={`/main/${user.userId}`}>
            
        </Link>
    )
}

export default UserItem;