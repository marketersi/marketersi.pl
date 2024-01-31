import "./NazwaFooter.css";

const NazwaFooter = () => {
  return (
    <div className="nazwa_footer_bottom">
      <div className="nazwa_footer_bottom_left">
        <a href="#sec1">Co otrzymam?</a>
        <a href="#sec2">Jak to działa?</a>
        <a href="#sec3">Przykłady realizacji</a>
      </div>
      <div className="nazwa_footer_bottom_right">
        <button className="nazwa_footer_bottom_btn">Zdobądź wycenę</button>
      </div>
    </div>
  );
};

export default NazwaFooter;
