"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeViewModel {
    constructor($http, user) {
        this.body = { KaaToken: "Anders" };
        this.change = () => {
            this.body.KaaToken = this.body.KaaToken == "" ? undefined : this.body.KaaToken;
            this.body.Category = this.body.Category == "" ? undefined : this.body.Category;
            this.body.Title = this.body.Title == "" ? undefined : this.body.Title;
            $http.post('/ViewLogs', this.body).then((resp) => {
                this.response = resp.data;
                console.log(resp);
            });
        };
        this.change();
        user.name = "Anders";
    }
}
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=viewModel.js.map