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
export type AlertTriangleProps = typeof __propDef.props;
export type AlertTriangleEvents = typeof __propDef.events;
export type AlertTriangleSlots = typeof __propDef.slots;
export default class AlertTriangle extends SvelteComponentTyped<AlertTriangleProps, AlertTriangleEvents, AlertTriangleSlots> {
}
export {};
