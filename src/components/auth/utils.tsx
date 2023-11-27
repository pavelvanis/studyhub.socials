import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = React.HTMLProps<HTMLDivElement> & {};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(" bg-white rounded-xl p-10 py-8 w-full max-w-md", className)}
    >
      {children}
    </div>
  );
};

type HeadingProps = React.HTMLProps<HTMLHeadingElement> & {};

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1 {...props} className={twMerge(" text-2xl font-semibold mb-5 text-center", className)}>
      {children}
    </h1>
  );
};

type ContentProps = React.HTMLProps<HTMLDivElement> & {};

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};
