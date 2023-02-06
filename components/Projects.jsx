import Image from "next/image";
import Link from "next/link";
import React from "react";
import zegoImg from "../public/assets/projects/zego.jpg";
import weatherAppImg from "../public/assets/projects/weatherapp.jpg";
import theLondonDesignImg from "../public/assets/projects/thelondondesign.jpg";
import trailfindersImg from "../public/assets/projects/trailfinders.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve been working on</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Zego Blog"
            backgroundImg={zegoImg}
            projectUrl="https://www.zego.com/"
            tech="React JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherAppImg}
            projectUrl="https://adrian23221.github.io/WeatherApp/"
            tech="API JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={theLondonDesignImg}
            projectUrl="http://thelondondesigns.com/"
            tech="Wordpress CMS"
          />
          <ProjectItem
            title="Trailfinders"
            backgroundImg={trailfindersImg}
            projectUrl="https://www.trailfinders.com/"
            tech="VUE JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
