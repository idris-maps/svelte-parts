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
export type DrinkingWaterProps = typeof __propDef.props;
export type DrinkingWaterEvents = typeof __propDef.events;
export type DrinkingWaterSlots = typeof __propDef.slots;
export default class DrinkingWater extends SvelteComponentTyped<DrinkingWaterProps, DrinkingWaterEvents, DrinkingWaterSlots> {
}
export {};
