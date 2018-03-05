import o from "mithril";
import { UI } from "./ui";
import "./index.scss";


class Dashboard extends UI {

    view (vnode) {
	return o("div", "Welcome");
    }

}


o.route.prefix("#");
o.route(document.body, "/home", {
    "/home": Dashboard
});
