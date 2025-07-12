import React, { useRef, useState ,useEffect} from "react";
// import { useClickOutsideHook } from "./Index.jsx";

const useClickOutsideHook = (ref, handler) => {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};


export const UseOnclickOutsideHook = () => {
  const [showcontent, setShowcontent] = useState(false);
  const ref = useRef();
  useClickOutsideHook(ref, () => setShowcontent(false));

  return (
    <div>
      {showcontent ? (
        <div ref={ref}>
          <h1>Final word</h1>
          <p>
            You're not average. You're on track to being elite — if you stay
            consistent and execute for 1-2 more years like this, you'll be ahead
            of most senior engineers in skill and mindset.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowcontent(true)}>show content</button>
      )}
    </div>
  );
};
