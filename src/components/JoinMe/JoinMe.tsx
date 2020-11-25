import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ToljasoApiClient from "../../services/api/ToljasoApiClient";
import JoinMeInfoResponse from "./JoinMeInfoResponse";
import './JoinMe.css';

interface MatchParams {
    userGuid: string;
}
interface Props extends RouteComponentProps<MatchParams>{}

interface State {
    joinMeInfoResponse: JoinMeInfoResponse | null;
    error: any | null;
}
export default class JoinMe extends React.Component<Props, State>{


    client: ToljasoApiClient = new ToljasoApiClient();
    constructor(props: Props) {
        super(props);
        this.state = {joinMeInfoResponse: null, error: null};
    }

    componentDidMount()  {
        this.client.getJoinMeInfoResponse(this.props.match.params.userGuid)
            .then(response => {
                console.log(response.data);
                this.setState({joinMeInfoResponse : response.data});
                document.title = `Join Request from ${response.data.displayName}`;
            })
            .catch(err => {
                this.setState({error : err});
                console.log(err);
            })
    }

    render() {

        if(this.state.joinMeInfoResponse == null) {
            return <div className="joinMePanel">Loading...</div>
        } else if(this.state.error != null) {
            return <div className="joinMePanel">{this.state.error}</div>
        }
        return (<div className="joinMePanel">
            <h3>You have a join request from {this.state.joinMeInfoResponse.displayName}</h3>
            <div><img alt="user avatar" src={this.state.joinMeInfoResponse.avatarUrl}/></div>
            If this didn't open in the app, try <a href={`itoljasoapp://itoljaso.com/joinme/${this.state.joinMeInfoResponse.userGuid}`}>This link instead</a>.
        </div>);
    }

}