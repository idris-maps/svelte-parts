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
export type EntranceProps = typeof __propDef.props;
export type EntranceEvents = typeof __propDef.events;
export type EntranceSlots = typeof __propDef.slots;
export default class Entrance extends SvelteComponentTyped<EntranceProps, EntranceEvents, EntranceSlots> {
}
export {};
