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
export type CampsiteProps = typeof __propDef.props;
export type CampsiteEvents = typeof __propDef.events;
export type CampsiteSlots = typeof __propDef.slots;
export default class Campsite extends SvelteComponentTyped<CampsiteProps, CampsiteEvents, CampsiteSlots> {
}
export {};
