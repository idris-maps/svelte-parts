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
export type BeakerProps = typeof __propDef.props;
export type BeakerEvents = typeof __propDef.events;
export type BeakerSlots = typeof __propDef.slots;
export default class Beaker extends SvelteComponentTyped<BeakerProps, BeakerEvents, BeakerSlots> {
}
export {};
