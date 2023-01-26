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
export type WindmillProps = typeof __propDef.props;
export type WindmillEvents = typeof __propDef.events;
export type WindmillSlots = typeof __propDef.slots;
export default class Windmill extends SvelteComponentTyped<WindmillProps, WindmillEvents, WindmillSlots> {
}
export {};
