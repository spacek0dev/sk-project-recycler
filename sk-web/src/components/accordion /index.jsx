import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const SkAccordion = ({ title, onchange, _isOpen, children, borderColor = "#aaa" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !!!prev);
    if (onchange) {
      onchange();
    }
  };
  useEffect(() => {
    if (_isOpen) {
      setIsOpen(true);
    }
  }, []);
  return (
    <div className={`${styles.skAccordion}`} style={{ borderColor: borderColor }}>
      <div className={`${styles.skAccordionTitle}`} onClick={toggle}>
        <span>{title}</span>
        <Image className={`${styles.skAccordionToggle}`} alt="Route icon" src="/images/icons/next.png" aria-expanded={isOpen} width={20} height={20} />
      </div>
      <div className={`${styles.skAccordionContent}`} aria-expanded={!isOpen}>
        {children}
      </div>
    </div>
  );
};
export default SkAccordion;
