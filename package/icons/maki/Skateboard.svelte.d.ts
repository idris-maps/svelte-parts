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
export type SkateboardProps = typeof __propDef.props;
export type SkateboardEvents = typeof __propDef.events;
export type SkateboardSlots = typeof __propDef.slots;
export default class Skateboard extends SvelteComponentTyped<SkateboardProps, SkateboardEvents, SkateboardSlots> {
}
export {};
