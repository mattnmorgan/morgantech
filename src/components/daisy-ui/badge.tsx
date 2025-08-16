type Props = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  flavor?:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  style?: "soft" | "outline" | "dash";
  label?: string;
};

const badgeClasses = {
  size: {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg",
    xl: "badge-xl",
  },
  flavor: {
    neutral: "badge-neutral",
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    info: "badge-info",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    ghost: "badge-ghost",
  },
  style: {
    soft: "badge-soft",
    outline: "badge-outline",
    dash: "badge-dash",
  },
};

export default function Component(props: Props) {
  const finalClass = [
    "badge",
    badgeClasses.size[props.size ?? "sm"],
    badgeClasses.flavor[props.flavor ?? "neutral"],
    props.style ? badgeClasses.style[props.style] : "",
  ].join(" ");

  return (
    <>
      <div className={finalClass}>{props.label ?? ""}</div>
    </>
  );
}
