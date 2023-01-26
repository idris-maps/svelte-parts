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
export type MailProps = typeof __propDef.props;
export type MailEvents = typeof __propDef.events;
export type MailSlots = typeof __propDef.slots;
export default class Mail extends SvelteComponentTyped<MailProps, MailEvents, MailSlots> {
}
export {};
