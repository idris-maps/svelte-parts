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
export type BeachProps = typeof __propDef.props;
export type BeachEvents = typeof __propDef.events;
export type BeachSlots = typeof __propDef.slots;
export default class Beach extends SvelteComponentTyped<BeachProps, BeachEvents, BeachSlots> {
}
export {};
