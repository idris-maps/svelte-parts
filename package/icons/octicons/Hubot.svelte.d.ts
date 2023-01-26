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
export type HubotProps = typeof __propDef.props;
export type HubotEvents = typeof __propDef.events;
export type HubotSlots = typeof __propDef.slots;
export default class Hubot extends SvelteComponentTyped<HubotProps, HubotEvents, HubotSlots> {
}
export {};
