import { GetLogsController } from './Pages/GetLogs/controller';
import { PostLogsController } from './Pages/PostLogs/controller';
import { HomeController } from './Pages/Home/controller';
import { UserController } from './Pages/User/controller';

export var routes: KaaIroute[] = [
    { name: 'HOME', config: { URL: "", templateURL: "./Pages/Home/Home.htm", Rcontroller: "HomeController", Acontroller: HomeController } },
    { name: 'GETLOGS', config: { URL: "GetLogs", templateURL: "./Pages/GetLogs/GetLogs.htm", Rcontroller: "GetLogsController", Acontroller: GetLogsController } },
    { name: 'POSTLOGS', config: { URL: "PostLogs", templateURL: "./Pages/PostLogs/PostLogs.htm", Rcontroller: "PostLogsController", Acontroller: PostLogsController } },
    { name: 'USER', config: { URL: "User", templateURL: "./Pages/User/User.htm", Rcontroller: "UserController", Acontroller: UserController } }
];

export interface KaaIrouteConfig {
    URL: string
    templateURL: string
    Rcontroller: string
    Acontroller: any
}
export interface KaaIroute {
    name: string
    config: KaaIroute[] | KaaIrouteConfig
}