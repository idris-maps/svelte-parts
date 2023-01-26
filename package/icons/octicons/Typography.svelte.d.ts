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
export type TypographyProps = typeof __propDef.props;
export type TypographyEvents = typeof __propDef.events;
export type TypographySlots = typeof __propDef.slots;
export default class Typography extends SvelteComponentTyped<TypographyProps, TypographyEvents, TypographySlots> {
}
export {};
