// MAIN APP FILE
import { Routes, Route } from 'react-router-dom';

import Header from "@/components/Header"
import IME from "@/components/IME"
import Plomo from '@/components/Plomo';
import FAQ from '@/components/FAQ';
import Footer from "@/components/Footer"

//scripts
import "../lib/iberice.js"

const Iberograficum = () => {
  return (
    <>
      <Header />
      <IME />
      <Plomo />
      <FAQ />
      <Footer />
    </>
  );
};

export default Iberograficum;