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
export type LogInProps = typeof __propDef.props;
export type LogInEvents = typeof __propDef.events;
export type LogInSlots = typeof __propDef.slots;
export default class LogIn extends SvelteComponentTyped<LogInProps, LogInEvents, LogInSlots> {
}
export {};
