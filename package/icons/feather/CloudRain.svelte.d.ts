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
export type CloudRainProps = typeof __propDef.props;
export type CloudRainEvents = typeof __propDef.events;
export type CloudRainSlots = typeof __propDef.slots;
export default class CloudRain extends SvelteComponentTyped<CloudRainProps, CloudRainEvents, CloudRainSlots> {
}
export {};
