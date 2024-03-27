import { Link } from "react-router-dom";

function RestaurantItem({ restaurant }){
    
    return(
        <Link to={`/restaurantdetail/${restaurant.code}`}>
            <div>
                <h3>{restaurant.name}</h3>
                <p>카테고리 : {restaurant.category}</p>
            </div>

        </Link>
    );
}

export default RestaurantItem;