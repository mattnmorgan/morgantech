import labels from "@/app/labels";

export default function Component() {
  return <div dangerouslySetInnerHTML={{ __html: labels.copyright }}></div>;
}
