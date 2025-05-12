import React, { useEffect } from "react";
import Styles from "./Home.module.css";
import SlideShow from "../../components/SlideShow/SlideShow.jsx";

function Home() {

  return (
    <div className={Styles["container"]}>

      <section id={Styles["hero"]}>
        <SlideShow />
      </section>

      <hr />

      <section id={Styles["info-1"]}>

        <ul id={Styles["list"]}>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
          <div className={Styles["lines"]}></div>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
          <div className={Styles["lines"]}></div>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
        </ul>
      </section>

      <hr />

      <section id={Styles["info-2"]}>
        <img src="/reading.svg"></img>

        <div className={Styles["para"]}>
          <h1>asd edwqdd qdwqwdqw dwqdqdwqd</h1>
          <p>sad asd ds ad wdsadqwd qdqwd qwdqw3d qwdqwdwq dqwdqwdqw dwqd qwdqwdq wdqwdqw dqwdqwd qwdqwd qw dwqd qw3dwe wqd fqfg qfqw fdwqfqfqw fqwfq3wfr wfqdrfw2ewqrf qwrqwrfqwf qrfq3wtqgt qgtq tgqwrwqtq3wgqtw3q tfqwrtwqgt wqs</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
