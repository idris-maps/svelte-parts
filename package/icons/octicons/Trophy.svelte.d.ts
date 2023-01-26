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
export type TrophyProps = typeof __propDef.props;
export type TrophyEvents = typeof __propDef.events;
export type TrophySlots = typeof __propDef.slots;
export default class Trophy extends SvelteComponentTyped<TrophyProps, TrophyEvents, TrophySlots> {
}
export {};
