import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import { Menu } from "@/components/Frontend/Menu";
import Service from "@/components/Frontend/ServiceCard";
import { ComponentsTab } from "@/components/Frontend/Tabs";


export default function Home() {
  return (
    <section className="  ">
     
     
     <Hero/>
     <Brands/>
     <Service/>
    
    </section>
  );
}
