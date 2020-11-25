import axios, { AxiosInstance, AxiosResponse } from "axios";
abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseUrl: string)  {
        this.instance = axios.create({baseURL: baseUrl});
        this.initializeResponseInterceptor();
    }

    private _handleResponse = ({data}: AxiosResponse) => data;
    protected _handleError = (error: any) => Promise.reject(error);

    private initializeResponseInterceptor = () => {
        //this.instance.interceptors.response.use(this._handleResponse, this._handleError);
    };

}

export default HttpClient;
