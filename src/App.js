import './App.css';
import Users from "./components/Users/Users";
import Routes from "./components/Routes/Routes";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (
        <div>
            <Routes/>

        </div>
    );
}

export default App;
