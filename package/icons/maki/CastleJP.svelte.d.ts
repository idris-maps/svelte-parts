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
export type CastleJpProps = typeof __propDef.props;
export type CastleJpEvents = typeof __propDef.events;
export type CastleJpSlots = typeof __propDef.slots;
export default class CastleJp extends SvelteComponentTyped<CastleJpProps, CastleJpEvents, CastleJpSlots> {
}
export {};
