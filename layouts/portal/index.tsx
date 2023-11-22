// "use client";

// import React, { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const PortalClient = ({
//   children,
//   selector = "modal-portal",
//   onClose,
//   show,
// }: PortalClientProps) => {
//   const ref = useRef<Element | null>(null);

//   useEffect(() => {
//     ref.current = document.getElementById(selector);
//   }, [selector]);

//   return show && ref.current ? createPortal(children, ref.current) : null;
// };

// export default PortalClient;
"use client";

import * as React from "react";
import { createPortal } from "react-dom";

export default function PortalClient({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
}
