import React from "react";
import Header from "./Header";

export default function RidesLayout(props: any) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}
