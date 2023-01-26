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
export type UmbrellaProps = typeof __propDef.props;
export type UmbrellaEvents = typeof __propDef.events;
export type UmbrellaSlots = typeof __propDef.slots;
export default class Umbrella extends SvelteComponentTyped<UmbrellaProps, UmbrellaEvents, UmbrellaSlots> {
}
export {};
