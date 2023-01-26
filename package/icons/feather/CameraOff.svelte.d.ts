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
export type CameraOffProps = typeof __propDef.props;
export type CameraOffEvents = typeof __propDef.events;
export type CameraOffSlots = typeof __propDef.slots;
export default class CameraOff extends SvelteComponentTyped<CameraOffProps, CameraOffEvents, CameraOffSlots> {
}
export {};
