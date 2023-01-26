import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        inline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlaygroundProps = typeof __propDef.props;
export type PlaygroundEvents = typeof __propDef.events;
export type PlaygroundSlots = typeof __propDef.slots;
export default class Playground extends SvelteComponentTyped<PlaygroundProps, PlaygroundEvents, PlaygroundSlots> {
}
export {};
