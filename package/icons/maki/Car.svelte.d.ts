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
export type CarProps = typeof __propDef.props;
export type CarEvents = typeof __propDef.events;
export type CarSlots = typeof __propDef.slots;
export default class Car extends SvelteComponentTyped<CarProps, CarEvents, CarSlots> {
}
export {};
