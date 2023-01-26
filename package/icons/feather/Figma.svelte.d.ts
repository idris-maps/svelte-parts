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
export type FigmaProps = typeof __propDef.props;
export type FigmaEvents = typeof __propDef.events;
export type FigmaSlots = typeof __propDef.slots;
export default class Figma extends SvelteComponentTyped<FigmaProps, FigmaEvents, FigmaSlots> {
}
export {};
