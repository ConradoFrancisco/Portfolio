/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Gmail({height=25,width=25}){
    return(
        <svg className="fill-white" width={width} height={height} xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.472 0-.856-.384-.856-.856v-6.788c0-.472.384-.856.856-.856h10.288c.472 0 .856.384.856.856v6.788c0 .472-.384.856-.856.856zm-5.144-3.043l-4.671-3.241-.01 5.784h9.342v-5.784l-4.661 3.241zm4.435-4.957h-8.895l4.46 3.115s3.126-2.203 4.435-3.115z"/></svg>
    );
}