import { initPageWelcome } from "./pages/welcome";
import { initPageInstructions } from "./pages/intructions";
import { initPageGame } from "./pages/game";

const routes = [
    {
        path: /\/welcome/,
        component: initPageWelcome,
    },

    {
        path: /\/instructions/,
        component: initPageInstructions,
    },
    {
        path: /\/game/,
        component: initPageGame,
    },
];

export function initRouter(container: Element) {
    function goTO(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTO });
                if (container.firstChild) {
                    container.firstChild?.remove();
                }
                container.appendChild(el);
            }
        }
    }
    if (location.pathname == "/") {
        goTO("/welcome");
    } else {
        handleRoute(location.pathname);
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}
