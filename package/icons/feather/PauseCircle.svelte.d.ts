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
export type PauseCircleProps = typeof __propDef.props;
export type PauseCircleEvents = typeof __propDef.events;
export type PauseCircleSlots = typeof __propDef.slots;
export default class PauseCircle extends SvelteComponentTyped<PauseCircleProps, PauseCircleEvents, PauseCircleSlots> {
}
export {};
