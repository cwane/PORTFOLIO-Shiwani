import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaPython, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiDotnet } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Reactjs Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         icon={<RiReactjsFill />} 
         
        />
        <Card
          title="Machine Learning"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Backend Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaPython /> }
          // icon={<SiDotnet />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features