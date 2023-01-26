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
export type TennisProps = typeof __propDef.props;
export type TennisEvents = typeof __propDef.events;
export type TennisSlots = typeof __propDef.slots;
export default class Tennis extends SvelteComponentTyped<TennisProps, TennisEvents, TennisSlots> {
}
export {};
