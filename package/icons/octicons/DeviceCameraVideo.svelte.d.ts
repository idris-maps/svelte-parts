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
export type DeviceCameraVideoProps = typeof __propDef.props;
export type DeviceCameraVideoEvents = typeof __propDef.events;
export type DeviceCameraVideoSlots = typeof __propDef.slots;
export default class DeviceCameraVideo extends SvelteComponentTyped<DeviceCameraVideoProps, DeviceCameraVideoEvents, DeviceCameraVideoSlots> {
}
export {};
