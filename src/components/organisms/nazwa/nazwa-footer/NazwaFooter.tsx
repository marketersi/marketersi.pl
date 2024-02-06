import { usePathname } from "next/navigation";
import Link from "next/link";
import "./NazwaFooter.css";
import { useState } from "react";

const NazwaFooter = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const [isSelected, setIsSelected] = useState(null);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className="nazwa_footer_bottom">
      <div className="nazwa_footer_bottom_left">
        <Link
          href="#sec1"
          className={isSelected == 1 ? "activeLink" : ""}
          onClick={() => setIsSelected(1)}
        >
          Co otrzymam?
        </Link>

        <Link
          href="#sec2"
          className={isSelected == 2 ? "activeLink" : ""}
          onClick={() => setIsSelected(2)}
        >
          Jak to działa?
        </Link>
        <Link
          href="#sec3"
          className={isSelected == 3 ? "activeLink" : ""}
          onClick={() => setIsSelected(3)}
        >
          Przykłady realizacji
        </Link>
      </div>
      <div className="nazwa_footer_bottom_right">
        <button className="nazwa_footer_bottom_btn">Zdobądź wycenę</button>
      </div>
    </div>
  );
};

export default NazwaFooter;
