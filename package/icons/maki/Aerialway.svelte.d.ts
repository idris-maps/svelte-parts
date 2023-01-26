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
export type AerialwayProps = typeof __propDef.props;
export type AerialwayEvents = typeof __propDef.events;
export type AerialwaySlots = typeof __propDef.slots;
export default class Aerialway extends SvelteComponentTyped<AerialwayProps, AerialwayEvents, AerialwaySlots> {
}
export {};
