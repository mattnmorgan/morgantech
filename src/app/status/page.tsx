"use client";

import Section from "@/components/app/section";
import labels from "@/app/status/labels";
import Badge from "@/components/daisy-ui/badge";
import Image from "next/image";
import { useState, useEffect } from "react";

function ActivityBadge(props: { status: boolean; img: string; label: string }) {
  return (
    <div>
      <div className="flex flex-row">
        <Image
          className="mr-4 dark:invert"
          src={props.img}
          width="32"
          height="32"
          alt={props.label}
        />
        <div className="mr-4 my-auto font-bold text-lg">{props.label}</div>
        <div className="flex flex-col items-center justify-items-center my-auto">
          <Badge
            size="md"
            label={props.status ? labels.online : labels.offline}
            flavor={props.status ? "success" : "error"}
          />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [statuses, setStatuses] = useState({ jellyfin: false });

  useEffect(() => {
    const ping = async () => {
      try {
        await fetch("https://jellyfin.morgantech.info/web/");
        setStatuses({ ...statuses, jellyfin: true });
      } catch (e) {}
    };

    ping();
  }, []);

  return (
    <>
      <div className="px-2 py-3 flex flex-col items-start justify-items-center max-w-3xl mx-auto">
        <Section title={labels.sections.serviceStatus.header}>
          <>
            <div>
              <span>{labels.sections.serviceStatus.description}</span>
            </div>
          </>
        </Section>
        <Section title={labels.sections.services.header}>
          <>
            <div className="flex flex-row flex-wrap items- items-start justify-items-center">
              <ActivityBadge
                status={statuses.jellyfin}
                label={labels.services.jellyfin}
                img="/img/morgantech/services/jellyfin.svg"
              />
            </div>
          </>
        </Section>
      </div>
    </>
  );
}
