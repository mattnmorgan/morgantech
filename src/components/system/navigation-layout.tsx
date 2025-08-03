import ConditionalContent from "@/components/system/conditional-content";

export type Props = {
  drawers?: React.ReactNode;
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <ConditionalContent condition={props.drawers}>
        {props.drawers}
      </ConditionalContent>
      <header className="fixed top-0 w-full z-50">
        <div className="navbar flex flex-row gap-2 bg-base-300 shadow-sm">
          {props.header}
        </div>
      </header>
      <main className="flex-grow pt-16">{props.body}</main>
      <ConditionalContent condition={props.footer}>
        <footer className="text-xs bg-base-200 px-2 py-3">
          <div className="flex flex-col items-center">{props.footer}</div>
        </footer>
      </ConditionalContent>
    </>
  );
}
