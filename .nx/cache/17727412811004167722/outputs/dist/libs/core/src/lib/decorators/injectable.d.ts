import { MetaProvider } from '../classes/meta-provider';
export declare const injectable: (_options?: {
    networked?: boolean;
}) => <T extends typeof MetaProvider>(ElementClass: T) => void;
