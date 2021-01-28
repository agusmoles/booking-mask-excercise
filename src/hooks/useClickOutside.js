import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const onClickOutside = ({ target }) => {
      if (!ref.current.contains(target)) {
        document.removeEventListener("click", onClickOutside);
        callback();
      }
    };

    document.addEventListener("click", onClickOutside);

    return () => document.removeEventListener("click", onClickOutside);
  }, [callback, ref]);

  return ref;
};

export { useClickOutside };
