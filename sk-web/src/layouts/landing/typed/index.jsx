import Typed from "typed.js";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const TypingComponent = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Metales", "Papeles", "Plasticos", "Vidrios", "Otros"],
      typeSpeed: 40,

      backDelay: 700,
      backSpeed: 35,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ minHeight: 80 }}>
      <span
        style={{ color: "#fff", fontWeight: 700, fontSize: "2rem" }}
        ref={typeTarget}
      />
    </div>
  );
};

export default TypingComponent;
