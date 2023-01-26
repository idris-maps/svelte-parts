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
export type DamProps = typeof __propDef.props;
export type DamEvents = typeof __propDef.events;
export type DamSlots = typeof __propDef.slots;
export default class Dam extends SvelteComponentTyped<DamProps, DamEvents, DamSlots> {
}
export {};
