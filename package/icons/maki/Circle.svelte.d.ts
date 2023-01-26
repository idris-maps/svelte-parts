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
export type CircleProps = typeof __propDef.props;
export type CircleEvents = typeof __propDef.events;
export type CircleSlots = typeof __propDef.slots;
export default class Circle extends SvelteComponentTyped<CircleProps, CircleEvents, CircleSlots> {
}
export {};
