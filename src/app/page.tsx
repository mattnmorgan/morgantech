"use client";

import React, { useState } from "react";
import Image from "next/image";
import labels from "@/app/labels";
import Layout from "@/components/system/navigation-layout";
import IterativeContent from "@/components/system/iterative-content";
import Section from "@/components/app/section";
import Skillset from "@/components/app/skillset";
import Highlight from "@/components/app/highlight";
import Drawer from "@/components/daisy-ui/drawer";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function PageHeader() {
    return (
      <>
        <div className="md:hidden flex flex-row px-3 gap-2">
          <button
            className="btn mx-0 px-0 w-[36px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              className="dark:invert"
              src="/img/global/menu.svg"
              width={32}
              height={32}
              alt={labels.navigationMenu}
            />
          </button>
        </div>
        <Image
          className="ms-2 rounded-sm border-1 border-black"
          src="/img/morgantech/logo.png"
          width={32}
          height={32}
          alt={labels.title}
        ></Image>
        <div className="font-semibold">{labels.title}</div>
        <div className="hidden md:flex flex-row px-3 gap-2">
          <div>Test</div>
          <div>Test</div>
        </div>
        <div className="flex-grow" />
        <div className="px-3 flex flex-row gap-2">
          <a href="mailto:matthew@morgantech.info">
            <Image
              className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
              src="/img/social/email.svg"
              width={32}
              height={32}
              alt={labels.images.email}
            ></Image>
          </a>
          <a href="https://www.linkedin.com/in/mnmorgan/">
            <Image
              className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
              src="/img/social/linkedin.svg"
              width={32}
              height={32}
              alt={labels.images.linkedin}
            ></Image>
          </a>
          <a href="https://www.github.com/mattnmorgan">
            <Image
              className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
              src="/img/social/github.svg"
              width={32}
              height={32}
              alt={labels.images.github}
            ></Image>
          </a>
        </div>
      </>
    );
  }

  function PageBody() {
    function highlight(
      logo: string,
      name: string,
      location: string,
      data: { name: string; start?: string; end?: string }[],
      remote: boolean = false
    ) {
      return { logo, name, location, data, remote };
    }

    function skillset(icon: string, header: string, skills: string[]) {
      return { icon, header, skills };
    }

    const workHighlights = [
      highlight(
        "/img/morgantech/about/workplace/litify.jpg",
        "Litify",
        "New York, NY",
        [{ name: "Software Engineer", start: "Jul 2025" }],
        true
      ),
      highlight(
        "/img/morgantech/about/workplace/ncino.webp",
        "nCino, Inc.",
        "Wilmington, NC",
        [
          {
            name: "Associate Software Engineer",
            start: "Jan 2023",
            end: "Jul 2025",
          },
          {
            name: "Associate Software Engineer in Test",
            start: "Nov 2020",
            end: "Jan 2023",
          },
        ],
        false
      ),
      highlight(
        "/img/morgantech/about/workplace/safe-data.jpg",
        "Safe Data Inc.",
        "Wallace, NC",
        [{ name: "Computer Programmer", start: "Jul 2019", end: "Sep 2020" }],
        false
      ),
      highlight(
        "/img/morgantech/about/workplace/ecu.jpg",
        "East Carolina University",
        "Greenville, NC",
        [
          {
            name: "Undergraduate Student Researcher",
            start: "Dec 2018",
            end: "May 2019",
          },
        ],
        false
      ),
    ];
    const skillsets = [
      skillset(
        "/img/morgantech/about/languages.svg",
        labels.about.headers.languages,
        labels.about.languages
      ),
      skillset(
        "/img/morgantech/about/frameworks.svg",
        labels.about.headers.frameworks,
        labels.about.frameworks
      ),
      skillset(
        "/img/morgantech/about/tools.svg",
        labels.about.headers.tools,
        labels.about.tools
      ),
      skillset(
        "/img/morgantech/about/concepts.svg",
        labels.about.headers.concepts,
        labels.about.concepts
      ),
      skillset(
        "/img/morgantech/about/practices.svg",
        labels.about.headers.developmentPractices,
        labels.about.practices
      ),
      skillset(
        "/img/morgantech/about/professional.svg",
        labels.about.headers.professionalSkills,
        labels.about.professional
      ),
    ];
    const eduHighlights = [
      highlight(
        "/img/morgantech/about/workplace/ecu.jpg",
        "East Carolina University",
        "Greenville, NC",
        [{ name: "Bachelor of Science in Computer Science", end: "May 2019" }]
      ),
      highlight(
        "/img/morgantech/about/workplace/jscc.png",
        "James Sprunt Community College",
        "Kenansville, NC",
        [
          { name: "Associate of Science", end: "May 2016" },
          { name: "Associate of Arts" },
          { name: "Associate of General Education" },
          { name: "Computer Networking Certification" },
          { name: "Web Design Certification" },
        ]
      ),
    ];
    const certHighlights = [
      highlight(
        "/img/morgantech/about/workplace/udemy.png",
        "Udemy",
        "Online",
        [
          {
            name: "Ultimate Redux Course (with Latest Redux Toolkit)",
            end: "Feb 2024",
          },
        ]
      ),
      highlight(
        "/img/morgantech/about/workplace/python-institute.jpg",
        "Python Institute",
        "Online",
        [{ name: "Certified Entry-Level Python Programmer", end: "Jun 2022" }]
      ),
      highlight(
        "/img/morgantech/about/workplace/udacity.jpg",
        "Udacity",
        "Online",
        [{ name: "Web Accessibility", end: "Jun 2022" }]
      ),
      highlight(
        "/img/morgantech/about/workplace/certiport.png",
        "Certiport",
        "Online",
        [{ name: "Microsoft Office 2013 Specialist Master", end: "Mar 2016" }]
      ),
    ];

    return (
      <>
        <div className="px-2 py-3 flex flex-col items-center justify-items-center max-w-3xl mx-auto">
          <div className="flex flex-row items-center gap-3 pb-2 max-w-xl">
            <Image
              className="rounded-lg border-1 border-black"
              src="/img/morgantech/matthew.morgan.png"
              width={128}
              height={128}
              alt={labels.images.matthewmorgan}
            ></Image>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-4xl">{labels.about.title}</div>
              <div className="text-xl">{labels.about.subtitle}</div>
              <div className="text-sm">{labels.about.tagline}</div>
            </div>
          </div>
          <div className="divider" />
          <Section title={labels.about.headers.about}>
            <div className="flex flex-row gap-0">
              <div className="flex-2/3 leading-6 text-justify text-sm">
                <IterativeContent
                  collection={labels.about.ataglance}
                  renderer={(line) => {
                    return (
                      <p
                        className="pb-2"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    );
                  }}
                />
              </div>
              <div className="flex-1/3 flex mx-3">
                <Image
                  src="/img/morgantech/about/engineer.svg"
                  className="dark:invert mx-auto"
                  alt=""
                  width={160}
                  height={160}
                  aria-hidden={true}
                ></Image>
              </div>
            </div>
          </Section>
          <Section title={labels.about.headers.experience}>
            <IterativeContent
              collection={workHighlights}
              renderer={(item) => (
                <Highlight
                  logoSrc={item.logo}
                  location={item.location}
                  roles={item.data}
                  company={item.name}
                  remote={item.remote}
                />
              )}
            />
          </Section>
          <Section title={labels.about.headers.skillset}>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-1">
              <IterativeContent
                collection={skillsets}
                renderer={(skillset) => (
                  <Skillset
                    iconSrc={skillset.icon}
                    header={skillset.header}
                    skills={skillset.skills}
                  />
                )}
              />
            </div>
          </Section>
          <Section title={labels.about.headers.education}>
            <IterativeContent
              collection={eduHighlights}
              renderer={(item) => (
                <Highlight
                  logoSrc={item.logo}
                  company={item.name}
                  roles={item.data}
                  location={item.location}
                />
              )}
            />
            <div className="divider" />
            <IterativeContent
              collection={certHighlights}
              renderer={(item) => (
                <Highlight
                  logoSrc={item.logo}
                  company={item.name}
                  roles={item.data}
                  location={item.location}
                />
              )}
            />
          </Section>
        </div>
      </>
    );
  }

  function PageFooter() {
    return <div dangerouslySetInnerHTML={{ __html: labels.copyright }}></div>;
  }

  return (
    <>
      <Drawer
        drawerId="test"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      ></Drawer>
      <Layout
        header={<PageHeader />}
        body={<PageBody />}
        footer={<PageFooter />}
      ></Layout>
    </>
  );
}
