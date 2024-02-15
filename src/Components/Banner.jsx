/* eslint-disable no-unused-vars */
import React from "react";
import Github from "../assets/svgs/Github";
import { ReactTyped } from "react-typed";
import Linkedin from "../assets/svgs/Linkedin";
import Gmail from "../assets/svgs/Gmail";

export default function Banner(){
    return(
      <header className="mt-7">
            <h1 className='text-6xl text-white font-bold'>Conrado Llanos</h1>
            <div className="mt-3">
                <ReactTyped
                className='text-2xl text-white '
                  strings={[
                    "Hola! Soy desarrollador Frontend",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={4000}
                
                >
                  <input className='bg-fondo-start w-3/4 text-white' disabled type="text"  />
                </ReactTyped>
                <br />
                <ReactTyped
                className='text-2xl text-white'
                
                  strings={[
                    "Con especialización en React JS."
                  ]}
                  startDelay={2500}
                  typeSpeed={40}
                  backSpeed={30}
                
                >
                  <input className='bg-fondo-start w-3/4' type="text" disabled />
                </ReactTyped>
            </div>
            <Github height={40} width={40}/>
            <Linkedin height={40} width={40}/>
            <Gmail height={40} width={40}/>
     </header>
    );
  }