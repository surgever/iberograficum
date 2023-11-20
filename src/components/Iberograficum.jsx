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

//scripts
import "../lib/iberice.js"

const Iberograficum = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="epi" element={<Epi />}> 
            <Route path=":code" element={<Plomo />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
    </Routes>
  );
};

export default Iberograficum;