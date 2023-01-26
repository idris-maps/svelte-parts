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
export type DivideCircleProps = typeof __propDef.props;
export type DivideCircleEvents = typeof __propDef.events;
export type DivideCircleSlots = typeof __propDef.slots;
export default class DivideCircle extends SvelteComponentTyped<DivideCircleProps, DivideCircleEvents, DivideCircleSlots> {
}
export {};
