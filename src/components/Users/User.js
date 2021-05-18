import {
    Link
} from "react-router-dom";

export default function User ({item,url}) {
    return (
         <div>
             {item.id} - {item.name} - {item.email} <Link to={`${url}/${item.id}/posts`}>User Posts</Link>


         </div>
    )
}