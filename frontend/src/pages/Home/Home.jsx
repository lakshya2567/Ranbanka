// import React from 'react'
// import HeroSection from '../HeroSection'
// import ServicesWeOffer from '../../components/ServicesWeOffer'
// import MissionSection from '../../components/MissionSection'
// import OurMotto from '../../components/OurMotto'
// import CoreValues from '../../components/CoreValues'
// import HowWeAreDiffrent from './component/HowweAreDifrent/HowWeAreDiffrent'

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-900">

//       {/* Hero Highlights (Optional) */}
//       <HeroSection />

//       {/* Services – Light Background */}
//       <section className="bg-gray-100">
//         <ServicesWeOffer />
//       </section>

//       {/* Mission – White Background */}
//       <section className="bg-white">
//         <MissionSection />
//       </section>

//       {/* Motto – Blue Background */}
//       <section className="bg-blue-600 text-white">
//         <OurMotto />
//       </section>

//       <section>
//         <HowWeAreDiffrent />
//       </section>

//       {/* Final Call-to-Action Section */}
//       <section className="bg-gray-900 text-white py-16 text-center">
//         <h2 className="text-3xl font-bold mb-4">Secure What Matters Most</h2>
//         <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300">
//           Whether you need industrial safety, personal security, or surveillance systems — we deliver reliability and peace of mind.
//         </p>
//         <a
//           href="/contact"
//           className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-md hover:bg-gray-200 transition"
//         >
//           Talk to Our Experts
//         </a>
//       </section>

//       {/* Core Values – Gray Background */}
//       <section className="bg-gray-100">
//         <CoreValues />
//       </section>
//     </main>
//   )
// }


import React from "react";
import HeroSection from "../HeroSection";
import ServicesWeOffer from "../../components/ServicesWeOffer";
import MissionSection from "../../components/MissionSection";
import OurMotto from "../../components/OurMotto";
// import HowWeAreDifferent from "./component/HowweAreDifrent/HowWeAreDiffrent";
import HowWeAreDifferent from "../../components/HowWeAreDiffrent";
import CoreValues from "../../components/CoreValues";
import FounderSection from "../../components/FounderSection";
import GallerySection from "../../components/galleryImages";
import CTA from "../../components/CTA";
import MapContactSection from "./Map";
import RanbankaBanner from "./RanbankaBanner";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      <RanbankaBanner />

      {/* 2. Services Section */}
      <section className="bg-gray-50">
        <ServicesWeOffer />
      </section>
      {/* founder section */}
      <section className="bg-gray-50">
        <FounderSection />
      </section>

      {/* gallery section */}
      <section className="bg-gray-50">
        <GallerySection />
      </section>


      {/* 3. Mission Section */}
      <section className="bg-gray-50">
        <MissionSection />
      </section>

      {/* 4. Motto Section */}
      <section className="bg-gray-50">
        <OurMotto />
      </section>

      {/* 5. How We Are Different */}
      <section className="bg-gray-50">
        <HowWeAreDifferent />
      </section>

      {/* 6. Core Values */}
      <section className="bg-white">
        <CoreValues />
      </section>



      {/* 7. CTA */}

      <CTA />
      <section className="bg-white">
        <MapContactSection />
      </section>

    </main>
  );
}