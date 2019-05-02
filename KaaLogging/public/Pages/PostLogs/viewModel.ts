export class PostLogsViewModel {
    Post: () => void;
    FormContent: { KaaToken?: string, Category?: string, Title?: string, Content?: string } = {}
    data: {};
    constructor(
        $scope: ng.IScope,
        $http: angular.IHttpService,
        user: any
    ) {
        $scope.$watch(function () { return user }, (newValue, oldValue, scope) => {
            this.FormContent.KaaToken = newValue.KaaToken;
        }, true)
        this.Post = () => {
            
            if (this.FormContent.KaaToken == "" || this.FormContent.KaaToken == undefined) { delete this.FormContent.KaaToken }
            if (this.FormContent.Category == "" || this.FormContent.Category == undefined) { delete this.FormContent.Category }
            if (this.FormContent.Title == "" || this.FormContent.Title == undefined) { delete this.FormContent.Title }
            if (this.FormContent.Content == "" || this.FormContent.Content == undefined) { delete this.FormContent.Content }
            
            $http.post('/PostLogs', this.FormContent).then((resp) => {
                this.data = resp.data;
                this.FormContent = { KaaToken: user.KaaToken }
            }).catch((err) => {
                console.error(err)
            })
        }
        
    }
}