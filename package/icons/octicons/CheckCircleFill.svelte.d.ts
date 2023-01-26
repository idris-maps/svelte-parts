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
export type CheckCircleFillProps = typeof __propDef.props;
export type CheckCircleFillEvents = typeof __propDef.events;
export type CheckCircleFillSlots = typeof __propDef.slots;
export default class CheckCircleFill extends SvelteComponentTyped<CheckCircleFillProps, CheckCircleFillEvents, CheckCircleFillSlots> {
}
export {};
