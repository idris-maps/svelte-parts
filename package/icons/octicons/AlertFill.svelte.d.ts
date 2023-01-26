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
export type AlertFillProps = typeof __propDef.props;
export type AlertFillEvents = typeof __propDef.events;
export type AlertFillSlots = typeof __propDef.slots;
export default class AlertFill extends SvelteComponentTyped<AlertFillProps, AlertFillEvents, AlertFillSlots> {
}
export {};
