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
export type XCircleFillProps = typeof __propDef.props;
export type XCircleFillEvents = typeof __propDef.events;
export type XCircleFillSlots = typeof __propDef.slots;
export default class XCircleFill extends SvelteComponentTyped<XCircleFillProps, XCircleFillEvents, XCircleFillSlots> {
}
export {};
