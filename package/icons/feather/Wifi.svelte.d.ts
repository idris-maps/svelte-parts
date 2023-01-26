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
export type WifiProps = typeof __propDef.props;
export type WifiEvents = typeof __propDef.events;
export type WifiSlots = typeof __propDef.slots;
export default class Wifi extends SvelteComponentTyped<WifiProps, WifiEvents, WifiSlots> {
}
export {};
