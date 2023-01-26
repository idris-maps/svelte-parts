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
export type CloudDrizzleProps = typeof __propDef.props;
export type CloudDrizzleEvents = typeof __propDef.events;
export type CloudDrizzleSlots = typeof __propDef.slots;
export default class CloudDrizzle extends SvelteComponentTyped<CloudDrizzleProps, CloudDrizzleEvents, CloudDrizzleSlots> {
}
export {};
