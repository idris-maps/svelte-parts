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
export type DashProps = typeof __propDef.props;
export type DashEvents = typeof __propDef.events;
export type DashSlots = typeof __propDef.slots;
export default class Dash extends SvelteComponentTyped<DashProps, DashEvents, DashSlots> {
}
export {};
