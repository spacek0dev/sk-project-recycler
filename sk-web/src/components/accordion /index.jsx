import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const SkAccordion = ({ title, onchange, isOpen, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !!!prev);
    if (onchange) {
      onchange();
    }
  };
  useEffect(() => {
    if (isOpen) {
      setIsOpen(true);
    }
  }, []);
  return (
    <div className={`${styles.skAccordion}`}>
      <div className={`${styles.skAccordionTitle}`} onClick={toggle}>
        <span>{title}</span>
        <Image
          className={`${styles.skAccordionToggle}`}
          alt="Route icon"
          src="/icons/next.png"
          aria-expanded={isOpen}
          width={20}
          height={20}
        />
      </div>
      <div className={`${styles.skAccordionContent}`} aria-expanded={!isOpen}>
        {children}
      </div>
    </div>
  );
};
export default SkAccordion;
