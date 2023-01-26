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
export type OpticianProps = typeof __propDef.props;
export type OpticianEvents = typeof __propDef.events;
export type OpticianSlots = typeof __propDef.slots;
export default class Optician extends SvelteComponentTyped<OpticianProps, OpticianEvents, OpticianSlots> {
}
export {};
