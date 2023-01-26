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
export type HomeProps = typeof __propDef.props;
export type HomeEvents = typeof __propDef.events;
export type HomeSlots = typeof __propDef.slots;
export default class Home extends SvelteComponentTyped<HomeProps, HomeEvents, HomeSlots> {
}
export {};
