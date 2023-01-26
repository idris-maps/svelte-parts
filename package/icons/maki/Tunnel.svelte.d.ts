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
export type TunnelProps = typeof __propDef.props;
export type TunnelEvents = typeof __propDef.events;
export type TunnelSlots = typeof __propDef.slots;
export default class Tunnel extends SvelteComponentTyped<TunnelProps, TunnelEvents, TunnelSlots> {
}
export {};
