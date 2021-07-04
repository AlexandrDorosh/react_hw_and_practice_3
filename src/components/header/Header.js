import './Header.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import HomePage from "../homePage/HomePage";


export default function Header(){
    return(
        <Router>
            <div className='header'>
                <div><Link className='link' to="/">Home page</Link></div>
                <div><Link className='link' to="/users">Users</Link></div>
                <div><Link className='link' to="/posts">Posts</Link></div>
                <div><Link className='link' to="/comments">Comments</Link></div>
            </div>

            <div className='page'>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />}/>
                    <Route path="/users" render={() => <Users />}/>
                    <Route path="/posts" render={() => <Posts />}/>
                    <Route path="/comments" render={() => <Comments />}/>
                </Switch>
            </div>
        </Router>
    )
}