/* eslint-disable no-unused-vars */
import React from "react";
import Github from "../assets/svgs/Github";
import { ReactTyped } from "react-typed";
import Linkedin from "../assets/svgs/Linkedin";
import {TfiEmail} from 'react-icons/tfi'
import { HiPencilSquare } from "react-icons/hi2";
export default function Banner(){
    return(
    <div className="grid grid-cols-5">
      <header className="mt-7 col-span-3">
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
            <div className="flex flex-row gap-9 mt-7">
                <Github height={40} width={40}/>
                <Linkedin height={40} width={40}/>
                <TfiEmail className="hover:cursor-pointer hover:scale-125 hover:fill-orange-300" size={45} width={40} height={40} color="white"/>
            </div>
     </header>
            <article className="w-full border col-span-2 rounded border-blue-50 bg-fondoBlanco shadow drop-shadow">
                <div className="m-6">
                    <strong className="flex flex-row mb-4">
                        <h4>Conoce en este portfolio quien soy y que tecnologias utilizo!🚀</h4> 
                        <HiPencilSquare size={30}/>
                    </strong>
                    <div className="flex flex-col ">
                        <em >Desarrollador con muchas horas de proyectos, estudie con cursos,mentorías y de manera autodidacta.<br></ br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam exercitationem placeat id quae adipisci?
                        </em>
                        <button className="p-2 rounded bg-fondo-start text-white mt-4" >Segui explorando</button>
                    </div>
                </div>
            </article>
    </div>
     
    );
  }