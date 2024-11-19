import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcons: ReactElement;
  endIcon?: any;
  onClick?: () => void;
}
type Variants = "primary" | "secondary";

const variantStyle = new Map<Variants, string>();
variantStyle.set(
  "primary",
  "bg-purple-600 font-apple text-white hover:text-purple-600 hover:bg-purple-300 "
);
variantStyle.set(
  "secondary",
  "font-apple hover:bg-purple-600 hover:text-white bg-purple-300 mr-4 text-purple-600"
);

type Sizes = "sm" | "md" | "lg";

const sizeStyles = new Map<Sizes, string>();
sizeStyles.set("lg", " py-2 px-5 text-xl rounded-lg");
sizeStyles.set("md", "py-2 px-4 text-lg rounded-md ");
sizeStyles.set("sm", "py-1 px-2 text-xs rounded-md");

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={`${variantStyle.get(props.variant)} ${sizeStyles.get(
          props.size
        )}`}
      >
        <div className="flex items-center">
          {props.startIcons}
          <div className="pl-2">{props.text}</div>
        </div>
      </button>
    </>
  );
};