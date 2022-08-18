import React, {useState} from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const App = () => {
    const [value, onChange] = useState(new Date());
    return (
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar />
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/auth"} exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;