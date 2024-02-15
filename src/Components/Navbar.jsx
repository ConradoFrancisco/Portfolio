/* eslint-disable no-unused-vars */
import React from "react";
export default function Navbar(){
    return(
          <nav className='pt-2 h-60'>
            <ul className="text-white gap-4 flex flex-row justify-end">
              <li>Inicio</li>
              <li>Sobre mi</li>
              <li>Proyectos</li>
              <li>Trabajos</li>
              <li>Contacto</li>
            </ul>
          </nav>
    );
  }