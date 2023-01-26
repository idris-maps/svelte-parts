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
export type DeviceMobileProps = typeof __propDef.props;
export type DeviceMobileEvents = typeof __propDef.events;
export type DeviceMobileSlots = typeof __propDef.slots;
export default class DeviceMobile extends SvelteComponentTyped<DeviceMobileProps, DeviceMobileEvents, DeviceMobileSlots> {
}
export {};
