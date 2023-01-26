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
export type AlertCircleProps = typeof __propDef.props;
export type AlertCircleEvents = typeof __propDef.events;
export type AlertCircleSlots = typeof __propDef.slots;
export default class AlertCircle extends SvelteComponentTyped<AlertCircleProps, AlertCircleEvents, AlertCircleSlots> {
}
export {};
