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
export type LoggingProps = typeof __propDef.props;
export type LoggingEvents = typeof __propDef.events;
export type LoggingSlots = typeof __propDef.slots;
export default class Logging extends SvelteComponentTyped<LoggingProps, LoggingEvents, LoggingSlots> {
}
export {};
