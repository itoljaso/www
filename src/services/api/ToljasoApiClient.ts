import JoinMeInfoResponse from "../../components/JoinMe/JoinMeInfoResponse";
import HttpClient from "./HttpClient";

export default class ToljasoApiClient extends HttpClient {
    public constructor() {
        super(process.env.REACT_APP_TOLJASO_API_ROOT_URL ?? 'http://nosuchhost');
    }

    public getJoinMeInfoResponse = (userGuid: string) => this.instance.get<JoinMeInfoResponse>(`/v1/joinme/${userGuid}`);
}