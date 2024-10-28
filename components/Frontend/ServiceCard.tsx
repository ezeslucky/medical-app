import React from "react";
import { ComponentsTab } from "./Tabs";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">{details}</p>
      </div>
    </div>
  );
};

const Service: React.FC = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[60px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
             
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Top-rated online doctors & specialists available now.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              Choose from thousands of providers at every day affordable prices. Book online today.
              </p>
            </div>
          </div>
        </div>

<div className=" mx-auto max-w-6xl">
<ComponentsTab/>
</div>
      
      </div>
    </section>
  );
};

export default Service;

