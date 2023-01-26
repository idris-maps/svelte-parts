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
export type CommunicationsTowerProps = typeof __propDef.props;
export type CommunicationsTowerEvents = typeof __propDef.events;
export type CommunicationsTowerSlots = typeof __propDef.slots;
export default class CommunicationsTower extends SvelteComponentTyped<CommunicationsTowerProps, CommunicationsTowerEvents, CommunicationsTowerSlots> {
}
export {};
