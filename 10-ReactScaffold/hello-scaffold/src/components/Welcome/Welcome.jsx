import React from "react";
import welcome from './Welcome.module.css'

export default class Welcome extends React.Component {
    render(){
        return(
            <div>
                <h2 className={welcome.title}>
                    Welcome
                </h2>
            </div>
        )
    }
}