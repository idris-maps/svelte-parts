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
export type CloudLightningProps = typeof __propDef.props;
export type CloudLightningEvents = typeof __propDef.events;
export type CloudLightningSlots = typeof __propDef.slots;
export default class CloudLightning extends SvelteComponentTyped<CloudLightningProps, CloudLightningEvents, CloudLightningSlots> {
}
export {};
