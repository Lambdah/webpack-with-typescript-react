

import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import './styles/main.scss';

export default function App(): JSX.Element{
    return (
        <Fragment>
            <p>Start your Project</p>
        </Fragment>
    )
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);