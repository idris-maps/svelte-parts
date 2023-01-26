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
export type ReplyProps = typeof __propDef.props;
export type ReplyEvents = typeof __propDef.events;
export type ReplySlots = typeof __propDef.slots;
export default class Reply extends SvelteComponentTyped<ReplyProps, ReplyEvents, ReplySlots> {
}
export {};
