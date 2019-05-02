export class GetLogsViewModel {
    body: { KaaToken: string, Category?: string, Title?: string } = { KaaToken: "" };
    change: () => void;
    response: any;
    RequestString: string
    PreviewRequestString: string
    constructor(
        $scope: ng.IScope,
        $http: angular.IHttpService,
        user: any
    ) {
        $scope.$watch(function () {
            return user;
        }, (newValue, oldValue, scope) => {
            console.log(["GET$watch", newValue])
            this.change();
        }, true)
        this.change = () => {
            this.body.KaaToken = user.KaaToken;
            this.RequestString = "GetLogs?";
            if (this.body.KaaToken != "" && this.body.KaaToken != undefined) { this.RequestString += "KaaToken=" + this.body.KaaToken }
            if (this.body.Category != "" && this.body.Category != undefined) { this.RequestString += "&Category=" + this.body.Category }
            if (this.body.Title != "" && this.body.Title != undefined) { this.RequestString += "&Title=" + this.body.Title }
            this.PreviewRequestString = "http://Mesterkaa.hopto.org:1337/" + this.RequestString;
            $http.get(this.RequestString).then((resp) => {
                this.response = resp.data;
                
            })
        }
        this.change();
        
        
    }
}