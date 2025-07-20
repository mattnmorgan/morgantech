import Image from "next/image";
import labels from "@/app/labels";
import IterativeContent from "@/components/system/iterative-content";
import ConditionalContent from "@/components/system/conditional-content";

export default function Page() {
  function Skillset(props: {
    iconSrc: string;
    header: string;
    skills: string[];
  }) {
    return (
      <>
        <div className="mb-2">
          <div className="font-semibold">
            <Image
              src={props.iconSrc}
              className="dark:invert inline-block mr-2"
              alt=""
              width={16}
              height={16}
              aria-hidden={true}
            ></Image>
            <span>{props.header}</span>
          </div>
          <div className="text-sm ml-6">
            <ul>
              <IterativeContent
                collection={props.skills}
                renderer={(skill) => <li>{skill}</li>}
              />
            </ul>
          </div>
        </div>
      </>
    );
  }

  function Workplace(props: {
    logoSrc?: string;
    company: string;
    location: string;
    remote?: boolean;
    roles?: {
      name: string;
      start: string;
      end?: string;
    }[];
  }) {
    return (
      <>
        <div className="pb-3">
          <div className="pb-1">
            <ConditionalContent condition={props.logoSrc}>
              <Image
                className="inline-block mr-2 outline-1 outline-white"
                src={props.logoSrc!}
                width={16}
                height={16}
                alt=""
                aria-hidden={true}
              />
            </ConditionalContent>
            <span className="font-semibold">{props.company}</span>
            <span>, </span>
            <span className="font-light">
              {props.location}&nbsp;
              <ConditionalContent condition={props.remote}>
                <>(Remote)</>
              </ConditionalContent>
            </span>
          </div>
          <ConditionalContent condition={props.roles}>
            <div className="text-sm grid grid-cols-2">
              <IterativeContent
                collection={props.roles!}
                renderer={(role) => (
                  <>
                    <div>{role.name}</div>
                    <div className="text-right">
                      <ConditionalContent condition={role.end}>
                        <span>
                          {role.start} - {role.end}
                        </span>
                      </ConditionalContent>
                      <ConditionalContent condition={!role.end}>
                        <span>{role.start} - Present</span>
                      </ConditionalContent>
                    </div>
                  </>
                )}
              />
            </div>
          </ConditionalContent>
        </div>
      </>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <div className="navbar flex flex-row gap-2 bg-base-300 shadow-sm">
          <Image
            className="ms-2 rounded-sm border-1 border-black"
            src="/img/morgantech/logo.png"
            width={32}
            height={32}
            alt={labels.title}
          ></Image>
          <div className="font-semibold">{labels.title}</div>
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
        </div>
      </header>
      <main className="flex-grow">
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
          <div className="rounded-sm bg-base-300 px-3 py-2 m-w-3xl w-full mb-3">
            <div className="font-semibold text-xl pb-3 mb-3 border-b-1">
              {labels.about.headers.about}
            </div>
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
          </div>
          <div className="rounded-sm bg-base-300 px-3 py-2 m-w-3xl w-full mb-3">
            <div className="font-semibold text-xl pb-3 mb-3 border-b-1">
              {labels.about.headers.experience}
            </div>
            <Workplace
              logoSrc="/img/morgantech/about/workplace/litify.jpg"
              company="Litify"
              location="New York, NY"
              remote={true}
              roles={[{ name: "Software Engineer", start: "Jul 2025" }]}
            />
            <Workplace
              logoSrc="/img/morgantech/about/workplace/ncino.webp"
              company="nCino, Inc."
              location="Wilmington, NC"
              roles={[
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
              ]}
            />
            <Workplace
              logoSrc="/img/morgantech/about/workplace/safe-data.jpg"
              company="Safe Data Inc."
              location="Wallace, NC"
              roles={[
                {
                  name: "Computer Programmer",
                  start: "Jul 2019",
                  end: "Sept 2020",
                },
              ]}
            />
            <Workplace
              logoSrc="/img/morgantech/about/workplace/ecu.jpg"
              company="East Carolina University"
              location="Greenville, North Carolina"
              roles={[
                {
                  name: "Undergraduate Student Researcher",
                  start: "Dec 2018",
                  end: "May 2019",
                },
              ]}
            />
          </div>
          <div className="rounded-sm bg-base-300 px-3 py-2 m-w-3xl w-full mb-3">
            <div className="font-semibold text-xl pb-3 mb-3 border-b-1">
              {labels.about.headers.skillset}
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-1">
              <Skillset
                iconSrc="/img/morgantech/about/languages.svg"
                header={labels.about.headers.languages}
                skills={labels.about.languages}
              ></Skillset>
              <Skillset
                iconSrc="/img/morgantech/about/frameworks.svg"
                header={labels.about.headers.frameworks}
                skills={labels.about.frameworks}
              ></Skillset>
              <Skillset
                iconSrc="/img/morgantech/about/tools.svg"
                header={labels.about.headers.tools}
                skills={labels.about.tools}
              ></Skillset>
              <Skillset
                iconSrc="/img/morgantech/about/concepts.svg"
                header={labels.about.headers.concepts}
                skills={labels.about.concepts}
              ></Skillset>
              <Skillset
                iconSrc="/img/morgantech/about/practices.svg"
                header={labels.about.headers.developmentPractices}
                skills={labels.about.practices}
              ></Skillset>
              <Skillset
                iconSrc="/img/morgantech/about/professional.svg"
                header={labels.about.headers.professionalSkills}
                skills={labels.about.professional}
              ></Skillset>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-xs bg-base-200 px-2 py-3">
        <div className="flex flex-col items-center">
          <div dangerouslySetInnerHTML={{ __html: labels.copyright }}></div>
        </div>
      </footer>
    </div>
  );
}
