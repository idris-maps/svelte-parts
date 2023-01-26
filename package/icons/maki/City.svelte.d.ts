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
export type CityProps = typeof __propDef.props;
export type CityEvents = typeof __propDef.events;
export type CitySlots = typeof __propDef.slots;
export default class City extends SvelteComponentTyped<CityProps, CityEvents, CitySlots> {
}
export {};
