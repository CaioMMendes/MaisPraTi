import { forwardRef, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "tertiary";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled = false, variant = "primary", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        className={twMerge(
          "flex cursor-pointer items-center justify-center rounded-[3px] px-4 py-1.5 text-lg transition-all duration-300",
          className,
          disabled && "opacity-70",
          variant === "primary" &&
            "bg-primary-red text-white hover:bg-primary-red/80",
          variant === "secondary" &&
            "bg-[#80808066] text-white hover:bg-[#80808099]",
          variant === "tertiary" && "bg-orange-500 text-green-400",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
export { Button };

//Serve para aparecer em alguns lugares o nome do componente do lugar de button
//Como por exemplo no react-dev-tools
Button.displayName = "Button";
