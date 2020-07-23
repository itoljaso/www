import * as React from "react";
import "./Splash.css";
import AbsinthePoster from "../../images/AbsinthePoster_Cropped.jpg";


export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class Splash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="tolja-splash-grid">
          <div className="tolja-splash-row">
            <div className="tolja-splash-column">
              <img src={AbsinthePoster} style={{width: "100%"}} alt="I have just met the woman I shall marry! I am certain. One day, I hope some fine lads will invent an app where I can prove it."/>
            </div>
            <div className="tolja-splash-column">
              <h2>SEBASTIAN COULDN'T SAY</h2>
              <h1>&ldquo;I TOLJA SO&rdquo;</h1>
              <h2>BUT YOU CAN.</h2>
            </div>
          </div>
      </div>
    );
  }
}
