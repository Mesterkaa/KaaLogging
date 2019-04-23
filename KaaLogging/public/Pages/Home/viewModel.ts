export class HomeViewModel {
    body: { KaaToken: string, Category?: string, Title?: string } = { KaaToken: "" };
    change: () => void;
    response: any;
    constructor(
        $scope: ng.IScope,
        $http: angular.IHttpService,
        user: any
    ) {
        $scope.$watch(function () { return user }, (newValue, oldValue, scope) => {
            console.log(newValue)
            this.body.KaaToken = newValue.KaaToken;
            this.change();
        }, true)
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
        
        
    }
}