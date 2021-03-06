import * as preact from 'preact';

export function route(url: string, replace?: boolean): boolean;
export function route(options: { url: string; replace?: boolean }): boolean;

export function getCurrentUrl(): string;

export interface CustomHistory {
    getCurrentLocation?: () => string;
    location?: string;
    listen(callback: (url: string) => void): () => void;
    push?: (url: string) => void;
    replace?: (url: string) => void;
}

export interface RoutableProps {
    path?: string;
    default?: boolean;
}

export interface RouterProps extends RoutableProps {
    history?: CustomHistory;
    static?: boolean;
    url?: string;
}

export class Router extends preact.Component<RouterProps, {}> {
    canRoute(url: string): boolean;
    getMatchingChildren(
        children: preact.VNode[],
        url: string,
        invoke: boolean
    ): preact.VNode[];
    routeTo(url: string): boolean;
    render(props: RouterProps, {}): preact.VNode;
}

export interface RouteProps<C> extends RoutableProps {
    component: preact.AnyComponent<C, any>;
}

export function Route<C>(
    props: RouteProps<C> & { [P in keyof C]: C[P] }
): preact.VNode;

export function Link(props: JSX.HTMLAttributes): preact.VNode;

export default Router;
