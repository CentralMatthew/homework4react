import {useEffect, useState} from "react";

export default function PostComments ({match:{url}}) {
    let [postComments, setPostComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + url)
            .then(value => value.json())
            .then(value => {
                setPostComments(value)
            })
    },[])
    return (
         <div>
             {postComments.map(value => {
                 return <div key={value.id}>{value.postId} - {value.name} - {value.body} - {value.email} </div>
             })}


         </div>
    )
}