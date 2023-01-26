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
export type FerryJpProps = typeof __propDef.props;
export type FerryJpEvents = typeof __propDef.events;
export type FerryJpSlots = typeof __propDef.slots;
export default class FerryJp extends SvelteComponentTyped<FerryJpProps, FerryJpEvents, FerryJpSlots> {
}
export {};
