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
export type SendProps = typeof __propDef.props;
export type SendEvents = typeof __propDef.events;
export type SendSlots = typeof __propDef.slots;
export default class Send extends SvelteComponentTyped<SendProps, SendEvents, SendSlots> {
}
export {};
