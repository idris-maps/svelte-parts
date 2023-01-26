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
export type LightBulbProps = typeof __propDef.props;
export type LightBulbEvents = typeof __propDef.events;
export type LightBulbSlots = typeof __propDef.slots;
export default class LightBulb extends SvelteComponentTyped<LightBulbProps, LightBulbEvents, LightBulbSlots> {
}
export {};
