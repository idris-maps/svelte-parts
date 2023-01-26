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
export type MessageCircleProps = typeof __propDef.props;
export type MessageCircleEvents = typeof __propDef.events;
export type MessageCircleSlots = typeof __propDef.slots;
export default class MessageCircle extends SvelteComponentTyped<MessageCircleProps, MessageCircleEvents, MessageCircleSlots> {
}
export {};
