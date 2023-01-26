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
export type CircleSlashProps = typeof __propDef.props;
export type CircleSlashEvents = typeof __propDef.events;
export type CircleSlashSlots = typeof __propDef.slots;
export default class CircleSlash extends SvelteComponentTyped<CircleSlashProps, CircleSlashEvents, CircleSlashSlots> {
}
export {};
