import React from "react";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='container pt-24 xl:pt-28 mx-auto px-6 xl:px-0'>
      {children}
    </div>
  );
};

export default Container;
