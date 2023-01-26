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
export type RocketProps = typeof __propDef.props;
export type RocketEvents = typeof __propDef.events;
export type RocketSlots = typeof __propDef.slots;
export default class Rocket extends SvelteComponentTyped<RocketProps, RocketEvents, RocketSlots> {
}
export {};
