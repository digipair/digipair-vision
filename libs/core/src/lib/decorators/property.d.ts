import 'reflect-metadata';
import { MetaElement } from '../classes/meta-element';
export declare const property: (options?: {
    default: any;
} | undefined) => <T extends MetaElement>(target: T, property: string) => void;
