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
export type MaximizeProps = typeof __propDef.props;
export type MaximizeEvents = typeof __propDef.events;
export type MaximizeSlots = typeof __propDef.slots;
export default class Maximize extends SvelteComponentTyped<MaximizeProps, MaximizeEvents, MaximizeSlots> {
}
export {};
