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
export type LighthouseJpProps = typeof __propDef.props;
export type LighthouseJpEvents = typeof __propDef.events;
export type LighthouseJpSlots = typeof __propDef.slots;
export default class LighthouseJp extends SvelteComponentTyped<LighthouseJpProps, LighthouseJpEvents, LighthouseJpSlots> {
}
export {};
