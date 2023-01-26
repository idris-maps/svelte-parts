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
export type Edit2Props = typeof __propDef.props;
export type Edit2Events = typeof __propDef.events;
export type Edit2Slots = typeof __propDef.slots;
export default class Edit2 extends SvelteComponentTyped<Edit2Props, Edit2Events, Edit2Slots> {
}
export {};
