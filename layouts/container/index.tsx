import React from "react";

const Container = ({ children }: ContainerProps) => {
  return (
    <main className='container min-h-[calc(98vh-145px)] pt-24 xl:pt-28 mx-auto px-6 xl:px-0'>
      {children}
    </main>
  );
};

export default Container;
