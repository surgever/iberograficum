// MAIN APP FILE
import { Routes, Route } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "@/components/Layout"
import Plomo from '@/components/Plomo';
import Home  from '@/routes/Home';
import About from '@/routes/About';
import Epi   from '@/routes/Epi';
import Error404 from '@/routes/404.jsx';
import EpiDB from '@/lib/epi.json';

const epiData = [
    {
      code: 'GI.15.04',
      title: 'Plomo de Ullastret',
      description:
        "  ",
    },
    {
      code: 'V.06.008',
      title: 'Vaso de los letreros',
      description:
        ' ',
    },
    {
      code: '404',
      title: 'No encontrado',
      description:
        ' ',
    },
];
//scripts
import "../lib/iberice.js"

const Iberograficum = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home epiData={epiData} epiDB={EpiDB} />} />
          <Route path="about" element={<About />} />
          <Route path="epi" element={<Epi epiDB={EpiDB} />}> 
            <Route path=":code"
              element={<Plomo epiData={epiData} epiDB={EpiDB} />}
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
    </Routes>
  );
};

export default Iberograficum;