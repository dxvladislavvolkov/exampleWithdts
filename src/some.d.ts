declare module someType {
    export interface animationConfig {
        someMethod?: ((element: someType.core.someElement) => any);
    }
}

declare module someType.core {
    export class Events {
        someMethod1(name: string): any;
    }
    export type someElement = {};
}

export default someType;