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
export type SoccerProps = typeof __propDef.props;
export type SoccerEvents = typeof __propDef.events;
export type SoccerSlots = typeof __propDef.slots;
export default class Soccer extends SvelteComponentTyped<SoccerProps, SoccerEvents, SoccerSlots> {
}
export {};
