import React from "react";
import CountUp from "react-countup";
import style from "./CountAnimation.module.css";
import { DiAtlassian } from "react-icons/di";
import { FiUser } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { ImClipboard } from "react-icons/im";
export default function CountAnimation() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.icon}>
          <FiUser size="2.3em" />
        </div>
        <div>
          <p className={style.num}>
            +<CountUp start={0} end={600} duration={3.5} />K
          </p>
          <p>Users</p>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.icon}>
          <DiAtlassian size="2.3em" />
        </div>
        <div>
          <p className={style.num}>
            +<CountUp start={0} end={200} duration={3.5} />
          </p>
          <p>Communities</p>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.icon}>
          <HiOutlineCurrencyDollar size="2.3em" />
        </div>
        <div>
          <p className={style.num}>
            +<CountUp start={0} end={90} duration={3.5} />K
          </p>
          <p>Donations</p>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.icon}>
          <ImClipboard size="2.3em" />
        </div>
        <div>
          <p className={style.num}>
            +<CountUp start={0} end={400} duration={3.5} />
          </p>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
}
