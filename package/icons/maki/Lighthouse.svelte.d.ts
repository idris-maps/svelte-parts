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
export type LighthouseProps = typeof __propDef.props;
export type LighthouseEvents = typeof __propDef.events;
export type LighthouseSlots = typeof __propDef.slots;
export default class Lighthouse extends SvelteComponentTyped<LighthouseProps, LighthouseEvents, LighthouseSlots> {
}
export {};
