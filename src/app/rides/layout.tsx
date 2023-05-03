import React from "react";
import Header from "./Header";
import 'semantic-ui-css/semantic.min.css'


export default function RidesLayout(props: any) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}
