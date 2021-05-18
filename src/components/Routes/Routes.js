import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import UsersPosts from "../UserPosts/UsersPosts";
import PostComments from "../PostComments/PostComments";

export default function Routes () {
    return (
         <div>
             <Router>
                 <Link to={'/users'}>Users</Link>
                 <hr/>
                 <Link to={'/posts'}>Posts</Link>
                 <Switch>
                     <Route exact={true} path={'/users'} component={Users}/>
                     <Route exact={true} path={'/posts'} component={Posts}/>
                     <Route exact={true} path={'/users/:id/posts'} component={UsersPosts}/>
                     <Route exact={true} path={'/posts/:id/comments'} component={PostComments}/>

                 </Switch>



             </Router>


         </div>
    )
}