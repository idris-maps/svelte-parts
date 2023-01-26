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
export type CrossProps = typeof __propDef.props;
export type CrossEvents = typeof __propDef.events;
export type CrossSlots = typeof __propDef.slots;
export default class Cross extends SvelteComponentTyped<CrossProps, CrossEvents, CrossSlots> {
}
export {};
