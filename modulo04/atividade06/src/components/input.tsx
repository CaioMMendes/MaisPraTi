import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Dispatch,
  LegacyRef,
  SetStateAction,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: boolean;
};

export type InputContainerProps = ComponentPropsWithoutRef<"div"> & {
  labelText: string;
  type?: "text" | "password";
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  name: string;
};

const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "flex rounded-[3px] bg-input-background px-4 pb-2 pt-6 font-normal leading-[18px] text-white placeholder-input-text outline-none ring-0 transition-all focus:outline-none focus:ring-0 active:right-0 active:outline-none md:placeholder:text-transparent",
          className,
        )}
        {...props}
      />
    );
  },
);

const InputContainer = forwardRef(
  (
    {
      className,
      labelText,
      type = "text",
      inputValue,
      setInputValue,
      name,
      ...rest
    }: InputContainerProps,
    ref: LegacyRef<HTMLDivElement>,
  ) => {
    const inputContainerClassName = twMerge(
      className,
      "flex flex-col relative transition-all duration-300",
    );
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    return (
      <div className={inputContainerClassName} {...rest} ref={ref}>
        <Input
          name={name}
          id={name}
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          className="peer"
        />
        <label
          htmlFor={name}
          className={twMerge(
            "absolute top-1/2 -translate-y-1/2 px-4 text-white opacity-70 transition-all duration-300",
            inputValue !== "" && "top-3 text-xs",
            "peer-focus:top-3 peer-focus:text-xs peer-active:top-3 peer-active:text-xs",
          )}
        >
          <p>{labelText}</p>
        </label>
      </div>
    );
  },
);

export { Input, InputContainer };

Input.displayName = "Input";
InputContainer.displayName = "InputContainer";
