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
export type XCircleProps = typeof __propDef.props;
export type XCircleEvents = typeof __propDef.events;
export type XCircleSlots = typeof __propDef.slots;
export default class XCircle extends SvelteComponentTyped<XCircleProps, XCircleEvents, XCircleSlots> {
}
export {};
