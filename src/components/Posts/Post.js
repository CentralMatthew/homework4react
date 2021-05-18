import {
    Link
} from "react-router-dom";
import UsersPosts from "../UserPosts/UsersPosts";



export default function Post({item, url}) {
    return (
        <div>
            {item.id} - {item.title} - <Link to={`${url}/${item.id}/comments`}>Post Comments</Link>
        </div>
    )
}