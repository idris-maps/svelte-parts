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
export type CemeteryJpProps = typeof __propDef.props;
export type CemeteryJpEvents = typeof __propDef.events;
export type CemeteryJpSlots = typeof __propDef.slots;
export default class CemeteryJp extends SvelteComponentTyped<CemeteryJpProps, CemeteryJpEvents, CemeteryJpSlots> {
}
export {};
