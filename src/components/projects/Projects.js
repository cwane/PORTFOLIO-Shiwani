import React from 'react'
import Title from '../layouts/Title'
import { MusicPlayer, Booking, Product, counsultPage, countries, portfolio } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ticket Booking System"
          des=" This is a ticket booking system. The task is to create a ticket booking system for a movie theatre. The system should be able to book tickets for a movie."
          src={Booking}
          github="https://github.com/cwane/Ticket-Booking"
          website="https://ticket-booking-lime.vercel.app/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des=" This is the portfolio website made using html, css and javascript. This website has responsive features."
          src={portfolio}
          github="https://github.com/cwane/Portfolio"
          website="https://cwane.github.io/Portfolio/"
        />
        <ProjectsCard
          title="Music Player"
          des=" music-player as name suggests is a music player that runs on your browser where you can select a music to play and listen to them on the basis of your liking."
          src={MusicPlayer}
          github="https://github.com/cwane/musicplayer"
          website="https://cwane.github.io/musicplayer/"
        />
        <ProjectsCard
          title="Counsultancy Landing Page"
          des=" This is a prototype of the page for counsultancy made using Reactjs."
          src={counsultPage}
          github="https://github.com/cwane/Consultancy-Landing-Page"
          website="https://consultancy-landing-page-134zw0tl0-shiwani-shahs-projects.vercel.app/"
        />
        <ProjectsCard
          title="Rest Countries Api"
          des=" This is the website that displayed all the countries details using REST countries api."
          src={countries}
          github="https://github.com/cwane/Rest-Countries-Api"
          website="https://rest-countries-hjiv06cav-shiwani-shahs-projects.vercel.app/"
        />
        <ProjectsCard
          title="Product Listing Website"
          des=" It is a website for performing CRUDE operation on productlist. It has used dummy json api for fetching product list."
          src={Product}
          github="https://github.com/cwane/Product"
          website="https://product-74g0d4jhr-shiwani-shahs-projects.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects