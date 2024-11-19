export interface Sizeprops {
  size: "sm" | "md" | "lg";
}

type SizeProps = "sm" | "md" | "lg";

export const sizeStyles = new Map<SizeProps, string>();
sizeStyles.set("lg", "size-6");
sizeStyles.set("md", "size-4");
sizeStyles.set("sm", "size-3");
