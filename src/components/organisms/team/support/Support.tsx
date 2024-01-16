import React from "react";
import style from "../team.module.css";

const Support = () => {
  return (
    <>
      <div className={style.Support}>
        <div className={style.teamContent}>
          <h4>
          Wierzymy, że wspieranie<br />
          małych, lokalnych <br />
            iinicjatyw ma<br />dużo sensu.
          </h4>
          <p style={{marginTop: '100px'}}>
            <span>Swoją drogą, wiesz że:</span>
            Małe i średnie firmy tworzą <br />
            75% miejsc pracy w Polsce?
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
