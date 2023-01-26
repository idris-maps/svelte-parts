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
export type DropletProps = typeof __propDef.props;
export type DropletEvents = typeof __propDef.events;
export type DropletSlots = typeof __propDef.slots;
export default class Droplet extends SvelteComponentTyped<DropletProps, DropletEvents, DropletSlots> {
}
export {};
