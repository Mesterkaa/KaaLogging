import { HomeController} from './Pages/Home/controller';

export var routes: KaaIroute[] = [
    { name: 'HOME', config: { URL: "", templateURL: "./Pages/Home/Home.htm", Rcontroller: "HomeController", Acontroller: HomeController } }
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