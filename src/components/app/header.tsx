import Image from "next/image";
import labels from "@/app/labels";

export default function Component() {
  return (
    <>
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
