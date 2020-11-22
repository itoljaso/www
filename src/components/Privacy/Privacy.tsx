import * as React from "react";
import styled from "styled-components";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class Privacy extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
      document.title = 'iToljaSo Privacy Policy';
  }

  render() {
      const PrivacyContent = styled.div`background-color: white;margin:auto; padding: 10px;text-align: center; color: black; font-family: Roboto, Arial, sans-serif;`;
      const PrivacyTitle = styled.h1`margin-bottom:1em;`;
      return (
        
        <PrivacyContent>
            <PrivacyTitle>iToljaSo Privacy Policy</PrivacyTitle>
          <p>The iToljaSo mobile application and website do not gather any information not explicitly or implicitly provided by the user.</p>
          <p>Users are authenticated to the system by <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth">Google Firebase Authentication</a>. 
          The following information is collected by iToljaSo based on the user's login provider: <ol><li>
              Display Name</li>
              <li>Email Address</li>
              <li>
                  Url of publically-available photo</li></ol>
                  User email addresses are <strong>not disclosed to other users</strong>.</p>
            <p>User information is subject to the terms and conditions laid forth by <a href="https://firebase.google.com/support/privacy">Google</a>.</p>
            <p>iToljaSo LLC does not provide user information to any third party.</p>

        </PrivacyContent>


    );
  }
}
