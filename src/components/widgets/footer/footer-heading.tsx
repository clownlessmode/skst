import React from "react";

export const FooterHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h4 className={`text-lg text-[#235095] font-medium ${className}`}>
      {title}
    </h4>
  );
};
