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
export type ActivityProps = typeof __propDef.props;
export type ActivityEvents = typeof __propDef.events;
export type ActivitySlots = typeof __propDef.slots;
export default class Activity extends SvelteComponentTyped<ActivityProps, ActivityEvents, ActivitySlots> {
}
export {};
