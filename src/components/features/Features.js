import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaPython, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
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
          des="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
         icon={<RiReactjsFill />} 
         
        />
        <Card
          title="Machine Learning"
          des="Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="It is the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for: Products you sell."
          icon={<SiProgress />}
        />
        <Card
          title="Backend Development"
          des=" Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers."
          icon={<FaPython /> }
          // icon={<SiDotnet />}
        />
        <Card
          title="UI/UX Design"
          des="UI design involves the look of a product, the visual components and interactive elements that contribute to a strong user experience. UX design focuses on the overarching feel of the
           product or service and the components that will lead to a meaningful, relevant experience for users."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="It is an online service that enables you to publish your website or web application on the internet."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features