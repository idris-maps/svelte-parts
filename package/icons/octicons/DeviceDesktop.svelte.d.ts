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
export type DeviceDesktopProps = typeof __propDef.props;
export type DeviceDesktopEvents = typeof __propDef.events;
export type DeviceDesktopSlots = typeof __propDef.slots;
export default class DeviceDesktop extends SvelteComponentTyped<DeviceDesktopProps, DeviceDesktopEvents, DeviceDesktopSlots> {
}
export {};
