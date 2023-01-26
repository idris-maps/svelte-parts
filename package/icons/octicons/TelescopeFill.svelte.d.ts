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
export type TelescopeFillProps = typeof __propDef.props;
export type TelescopeFillEvents = typeof __propDef.events;
export type TelescopeFillSlots = typeof __propDef.slots;
export default class TelescopeFill extends SvelteComponentTyped<TelescopeFillProps, TelescopeFillEvents, TelescopeFillSlots> {
}
export {};
