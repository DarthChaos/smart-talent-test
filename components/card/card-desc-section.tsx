import React from "react";

const CardDescriptiveSection = ({
  img,
  title,
  value,
}: CardDescriptiveSectionProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex'>
        {img}
        <h6 className='font-semibold'>{title}</h6>
      </div>
      <p>{value}</p>
    </div>
  );
};

export default CardDescriptiveSection;
