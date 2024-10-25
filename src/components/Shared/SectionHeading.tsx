import React from "react";

interface Props {
  heading: string;
  accent?: string;
  className?: string;
  accentClassName?: string;
}

const SectionHeading = ({
  sectionHeadingProps,
}: {
  sectionHeadingProps: Props;
}) => {
  const { heading, accent, className, accentClassName } = sectionHeadingProps;
  return (
    <h1 className={`text-center text-4xl font-bold lg:text-5xl ${className}`}>
      {heading} <span className={`${accentClassName}`}>{accent}</span>
    </h1>
  );
};

export default SectionHeading;
