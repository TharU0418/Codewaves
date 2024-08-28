import { Card } from "@/components/Card ";
import Contact from "@/components/Contact";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurProjects from "@/components/OurProjects";
import { OurWorks } from "@/components/OurWorks";
import Welcome from "@/components/Welcome";
import WhatOurClients from "@/components/WhatOurClients";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Navbar/> */}
      <Welcome/>
      <WhyUs/>
      <WhatWeDo/>
      {/* <OurProjects/> */}
      <OurWorks/>
          <WhatOurClients/>
      <Contact/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </div>
  );
}
