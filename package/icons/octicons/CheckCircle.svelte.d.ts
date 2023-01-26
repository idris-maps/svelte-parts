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
export type CheckCircleProps = typeof __propDef.props;
export type CheckCircleEvents = typeof __propDef.events;
export type CheckCircleSlots = typeof __propDef.slots;
export default class CheckCircle extends SvelteComponentTyped<CheckCircleProps, CheckCircleEvents, CheckCircleSlots> {
}
export {};
