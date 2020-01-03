
import Vue, { VueConstructor } from 'vue'
import { VsAlert } from './components/VsAlert'

/** Alert Component */
export class Alert extends VsAlert {}

declare module 'vue/types/vue' {
    export interface Vue {
        $vs: any
    }
}

declare global {
    interface Window {
        Vue: VueConstructor,
        consolee: any
    }
}