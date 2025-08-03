import Image from "next/image";
import ConditionalContent from "@/components/system/conditional-content";
import IterativeContent from "@/components/system/iterative-content";

export default function Component(props: {
  logoSrc?: string;
  company: string;
  location: string;
  remote?: boolean;
  roles?: {
    name: string;
    start?: string;
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
                  <div className="text-right font-mono">
                    <ConditionalContent condition={role.end && role.start}>
                      <span>
                        {role.start} - {role.end}
                      </span>
                    </ConditionalContent>
                    <ConditionalContent condition={role.end && !role.start}>
                      <span>{role.end}</span>
                    </ConditionalContent>
                    <ConditionalContent condition={role.start && !role.end}>
                      <span>{role.start} - Present </span>
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
