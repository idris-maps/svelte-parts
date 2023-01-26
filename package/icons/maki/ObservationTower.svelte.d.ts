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
export type ObservationTowerProps = typeof __propDef.props;
export type ObservationTowerEvents = typeof __propDef.events;
export type ObservationTowerSlots = typeof __propDef.slots;
export default class ObservationTower extends SvelteComponentTyped<ObservationTowerProps, ObservationTowerEvents, ObservationTowerSlots> {
}
export {};
