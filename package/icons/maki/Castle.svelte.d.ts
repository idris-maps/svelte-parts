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
export type CastleProps = typeof __propDef.props;
export type CastleEvents = typeof __propDef.events;
export type CastleSlots = typeof __propDef.slots;
export default class Castle extends SvelteComponentTyped<CastleProps, CastleEvents, CastleSlots> {
}
export {};
