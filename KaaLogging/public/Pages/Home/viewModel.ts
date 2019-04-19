export class HomeViewModel {
    body: { KaaToken: string, Category?: string, Title?: string } = { KaaToken: "Anders" };
    change: () => void;
    response: any;
    constructor(
        $http: angular.IHttpService,
        user: any
    ) {
        this.change = () => {
            this.body.KaaToken = this.body.KaaToken == "" ? undefined : this.body.KaaToken;
            this.body.Category = this.body.Category == "" ? undefined : this.body.Category; 
            this.body.Title = this.body.Title == "" ? undefined : this.body.Title; 
            $http.post('/ViewLogs', this.body).then((resp) => {
                this.response = resp.data;
                console.log(resp)
            })
        }
        this.change();
        user.name = "Anders";
        
    }
}