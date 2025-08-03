export default function Section(props: {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="rounded-sm bg-base-300 px-3 py-2 m-w-3xl w-full mb-3">
      <div className="font-semibold text-xl pb-3 mb-3 border-b-1">
        {props.title}
      </div>
      {props.children}
    </div>
  );
}
