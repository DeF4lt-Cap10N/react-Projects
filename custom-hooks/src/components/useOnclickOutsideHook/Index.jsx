// import React, { useEffect } from "react";

// export const useClickOutsideHook = (ref, handler) => {
//   useEffect(() => {
//     function listener(e) {
//       if (!ref.current || ref.current.contains(e.target)) {
//         return;
//       }

//       handler(e);
//     }

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// };
