import React from 'react';
import "../Home.css";
import {useHistory} from "react-router-dom";
const Home = () => {
    let history = useHistory();
    const onAboutHandler = () => {
        history.push("/about");
    };
    const onTopicHandler = () => {
        history.push("/topic");
    };
    
    return(
    <div className="container">
    <div className="holder">
        <div className="labletxt">Welcome Dashborad</div>
        <div className="cellholder"><div className="goback" onClick={() => onAboutHandler()}>About</div></div>
        <div className="cellholder"><div className="goback" onClick={() => onTopicHandler()}>Topic</div></div>
    </div>
</div>
);
}
export default Home;