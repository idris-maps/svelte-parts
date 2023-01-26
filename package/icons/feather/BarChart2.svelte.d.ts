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
export type BarChart2Props = typeof __propDef.props;
export type BarChart2Events = typeof __propDef.events;
export type BarChart2Slots = typeof __propDef.slots;
export default class BarChart2 extends SvelteComponentTyped<BarChart2Props, BarChart2Events, BarChart2Slots> {
}
export {};
