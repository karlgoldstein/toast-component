import React from "react";

export default function useEscapeKey(callback) {

  React.useEffect(() => {

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    }

  }, [callback]);
} 