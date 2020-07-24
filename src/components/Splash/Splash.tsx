import * as React from "react";
import "./Splash.css";
import AbsinthePoster from "../../images/AbsinthePoster_Cropped.jpg";
import PhoneScreen from "../../images/iPhoneWithLogoTrans.png";

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

        <div id="tolja-splash-flex-container">
          <div className="tolja-splash-section" id="tolja-splash-section-first">
            <img
              id="tolja-splash-img-poster"
              src={AbsinthePoster}
              alt="I have just met the woman I shall marry! I am certain. One day, I hope some fine lads will invent an app where I can prove it."
            />
          </div>
          <div className="tolja-splash-spacer tolja-splash-spacer-middle"></div>
          <div
            className="tolja-splash-section"
            id="tolja-splash-section-second"
          >
            <p className="tolja-splash-marketing-copy">SEBASTIAN COULDN'T SAY</p>
            <p className="tolja-splash-marketing-copy tolja-splash-marketing-pop">&ldquo;I TOLJA SO&rdquo;</p>
            <p className="tolja-splash-marketing-copy">BUT YOU CAN.</p>
            <p className="tolja-hashtag">#AlwaysBeRightAgain</p>
            <img
              id="tolja-splash-img-phone"
              src={PhoneScreen}
              alt="App for iPhone and Android coming soon"
            />
          </div>

        </div>


    );
  }
}
