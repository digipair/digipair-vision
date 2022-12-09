import { MetaProvider } from '../classes/meta-provider';
export declare const injectable: (_options?: {
    networked?: boolean | undefined;
} | undefined) => <T extends typeof MetaProvider>(ElementClass: T) => void;
