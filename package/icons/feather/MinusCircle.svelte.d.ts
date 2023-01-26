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
export type MinusCircleProps = typeof __propDef.props;
export type MinusCircleEvents = typeof __propDef.events;
export type MinusCircleSlots = typeof __propDef.slots;
export default class MinusCircle extends SvelteComponentTyped<MinusCircleProps, MinusCircleEvents, MinusCircleSlots> {
}
export {};
