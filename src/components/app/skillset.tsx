import Image from "next/image";
import IterativeContent from "@/components/system/iterative-content";

export default function Component(props: {
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
