import React from "react";
import style from "../team.module.css";
import PersonalCard from "../personal/PersonalCard";

const GoodTime = () => {
  const CardData2 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkinga.ba08d364.jpg&w=256&q=75",
    name: "Kinga Stencel",
    // role: "Założyciel",
    description:
      "„Lubię wychodzić z pracy posiadając pewność, że wszystko jest",
  };
  const CardData1 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falicja.c75ad4b5.jpg&w=256&q=75",
    name: "Kasia Żabkiewicz",
    // role: "Założyciel",
    description:
      "„Lubię wychodzić z pracy posiadając pewność, że wszystko jest„Pasja klientów potrafi napędzać dużo bardziej niż kawa”",
  };
  const CardData3 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkrzysztof.4cb832c2.jpg&w=256&q=75",
    name: "Krzysztof Gilowski",
    // role: "Założyciel",
    description:
      "„Nie robisz marketingu, jeśli nie mierzysz wszystkich efektów”",
  };
  const CardData4 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdamian.2fe2b95a.jpg&w=256&q=75",
    name: "Damian Toczyłowski",
    // role: "Założyciel",
    description:
      "„Recepta na udane projekty jest prosta. To odrobina talentu i masa,masa ciężkiej pracy. ”",
  };
  const CardData5 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaciej.408939e8.jpg&w=256&q=75",
    name: "Maciej Wysocki",
    // role: "Założyciel",
    description:
      "„Zawsze jest miło dołożyć cegiełkę do powstania świetnej polskiej firmy. Ten kraj ma wielką moc.”",
  };

  return (
    <>
      <div className={style.teamContent}>
        <h2 className={style.goodHeadingMain}>
          Teraz jest 12:26
          <span>To dobry czas </span> na krótki <br />
          spacer po studiu.
        </h2>
        <p>
          Drzwi do studia najczęściej otwiera Maciej. Razem z Kingą i Martą są
          tu już przed ósmą. Parzą kawę, jedzą śniadanie i omawiają zadania
          projektowe.
        </p>
        <p>
          Kasia zaczyna dzień od korespondencji z wieczora. Jest sekretem naszej
          punktualności. Współpracując z nią, masz wrażenie, że każdy proces ma
          anioła stróża.
        </p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...CardData1} />
      </div>
      <div className={style.teamContent}>
        <p>
          Biurko obok Kinga rozdysponowuje pracę partnerom. Kinga pochodzi z
          dużej i wspaniałej rodziny, więc w naturalny sposób dogaduje się z
          każdym.
        </p>
      </div>
      <div className={style.cardCup}>
        <PersonalCard {...CardData2} />
      </div>
      <div className={style.teamContent}>
        <p>
          Obok pracuje Krzysztof. Jego świadomość marketingu w sieci to
          największa przewaga nad konkurencją.
        </p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...CardData3} />
      </div>
      <div className={style.teamContent}>
        <p>
          W sąsiednim pokoju siedzą zaklinacze pikseli: Jakub, Damian, oraz
          Michał. To właśnie oni serwują Twoim oczom przyjemność, od której
          trudno oderwać wzrok.
        </p>
      </div>
      <div className={style.hardWorkBG}>
        <div className={style.cardDataSpace}>
          <PersonalCard {...CardData4} />
        </div>

        <div className={style.teamContent}>
          <p>
            Naprzeciwko pracuje Maciej. Szwajcarski zegarek. Ukończył Akademię
            Sztuk Pięknych, ale prawdziwą pasję odnalazł w układaniu zdań, które
            napędzają sprzedaż.
          </p>
          <p>Jego pomysły są po prostu uwielbiane przez klientów!</p>
        </div>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...CardData5} />
      </div>
    </>
  );
};

export default GoodTime;
