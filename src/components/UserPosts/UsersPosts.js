import {useEffect, useState} from "react";

export default function UsersPosts ({match: {url}}) {
    let [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + url)
            .then(value => value.json())
            .then(value => {
                setUserPosts(value)
            })
    },[])


    return (
         <div>
             {
                 userPosts && userPosts.map(value => {
                     return <div key={value.id}>{value.userId} - {value.title} - {value.body}</div>
                 })
             }


         </div>
    )
}