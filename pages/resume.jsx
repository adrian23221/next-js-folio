import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Adrian | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Adrian Pruszkowski</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/adrian-pruszkowski/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/adrian23221"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Front End Developer <span className="px-1">|</span> Complex
              Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Front End Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I'm a goal-oriented, reliable individual and my mission in life is to
          be able to change or make an impact on someone’s life using
          technology. My constant need to indulge in my curiosity and set forth
          challenges lead me to begin my coding and design journey. I'm
          full-time Web / Front End Developer with passion to UX Design.
          Currently on Google UX Designer Course. Completed React BootCamp with
          Kodiri. I'm very interested in Blockchain Technologies, eg. Ethereum.
          You can meet me on many programmers Meetups around London. I'm Member
          of CodeCademy London Meetup Group, Kodiri, JSMonthly or Flatiron
          School London Coding Community Proficient: HTML, CSS, JavaScript,
          Responsive Web Design, React.JS, VUE.JS, Photoshop, Figma, Adobe XD
          Learning: Solidity Feel free to contact me directly at
          pruszkowski.adrian@gmail.com Check out some of my design samples at
          http://www.adrianp.co.uk
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Sanity CMS
            <span className="px-2">|</span> Bootstrap
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ZEGO</span>
            <span className="px-2">|</span>London, UK
          </p>
          <p className="py-1 italic">
            Front End Web Developer (06.2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Develop Sanity CMS.</li>
            <li>Build SEO Strategy.</li>
            <li>
              Work closely with Marketing team to create Social Media campaigns.
            </li>
          </ul>
        </div>

        {/*  */}

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Trailfinders</span>
            <span className="px-2">|</span>London, UK
          </p>
          <p className="py-1 italic">Web Developer (10.2019 – 05.2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Use React, Vue and Handlebars libraries.</li>
            <li>Create and implement Designs UI/UX.</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Gnomen LTD</span>
            <span className="px-2">|</span>London, UK
          </p>
          <p className="py-1 italic">Front End Developer (04.2019 – 10.2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Use React, Vue and Handlebars libraries.</li>
            <li>Create and implement Designs UI/UX.</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Fibodo</span>
            <span className="px-2">|</span>London, UK
          </p>
          <p className="py-1 italic">Front End Developer (10.2018 – 04.2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Use React, Vue and Handlebars libraries.</li>
            <li>Create and implement Designs UI/UX.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
