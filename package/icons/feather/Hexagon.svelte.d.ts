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
export type HexagonProps = typeof __propDef.props;
export type HexagonEvents = typeof __propDef.events;
export type HexagonSlots = typeof __propDef.slots;
export default class Hexagon extends SvelteComponentTyped<HexagonProps, HexagonEvents, HexagonSlots> {
}
export {};
