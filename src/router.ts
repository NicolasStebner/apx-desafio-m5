import { initPageWelcome } from "./pages/welcome";
import { initPageInstructions } from "./pages/intructions";
import { initPageGame } from "./pages/game";
import { initPageResult } from "./pages/result";

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
    {
        path: /\/result/,
        component: initPageResult,
    },
];

export function initRouter(container: Element) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });
                if (container.firstChild) {
                    container.firstChild?.remove();
                }
                container.appendChild(el);
            }
        }
    }
    if (location.pathname == "/") {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }
    window.onpopstate = () => {
        handleRoute(location.pathname);
    };
}
