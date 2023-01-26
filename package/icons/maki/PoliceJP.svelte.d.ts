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
export type PoliceJpProps = typeof __propDef.props;
export type PoliceJpEvents = typeof __propDef.events;
export type PoliceJpSlots = typeof __propDef.slots;
export default class PoliceJp extends SvelteComponentTyped<PoliceJpProps, PoliceJpEvents, PoliceJpSlots> {
}
export {};
