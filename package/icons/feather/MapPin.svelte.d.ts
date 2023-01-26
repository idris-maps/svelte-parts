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
export type MapPinProps = typeof __propDef.props;
export type MapPinEvents = typeof __propDef.events;
export type MapPinSlots = typeof __propDef.slots;
export default class MapPin extends SvelteComponentTyped<MapPinProps, MapPinEvents, MapPinSlots> {
}
export {};
