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
export type LogProps = typeof __propDef.props;
export type LogEvents = typeof __propDef.events;
export type LogSlots = typeof __propDef.slots;
export default class Log extends SvelteComponentTyped<LogProps, LogEvents, LogSlots> {
}
export {};
