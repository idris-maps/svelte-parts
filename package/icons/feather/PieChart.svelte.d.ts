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
export type PieChartProps = typeof __propDef.props;
export type PieChartEvents = typeof __propDef.events;
export type PieChartSlots = typeof __propDef.slots;
export default class PieChart extends SvelteComponentTyped<PieChartProps, PieChartEvents, PieChartSlots> {
}
export {};
