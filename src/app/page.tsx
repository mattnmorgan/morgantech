import Image from "next/image";
import labels from "@/app/labels";
import IterativeContent from "@/components/system/iterative-content";

export default function Page() {
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
              {labels.about.headers.skillset}
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-1">
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/languages.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Languages</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.languages}
                      renderer={(lang) => <li>{lang}</li>}
                    />
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/frameworks.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Frameworks &amp; Libraries</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.frameworks}
                      renderer={(item) => <li>{item}</li>}
                    />
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/tools.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Tools</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.tools}
                      renderer={(item) => <li>{item}</li>}
                    />
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/concepts.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Concepts</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.concepts}
                      renderer={(item) => <li>{item}</li>}
                    />
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/practices.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Development Practices</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.practices}
                      renderer={(item) => <li>{item}</li>}
                    />
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">
                  <Image
                    src="/img/morgantech/about/professional.svg"
                    className="dark:invert inline-block mr-2"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden={true}
                  ></Image>
                  <span>Professional Skills</span>
                </div>
                <div className="text-sm ml-6">
                  <ul>
                    <IterativeContent
                      collection={labels.about.professional}
                      renderer={(item) => <li>{item}</li>}
                    />
                  </ul>
                </div>
              </div>
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
