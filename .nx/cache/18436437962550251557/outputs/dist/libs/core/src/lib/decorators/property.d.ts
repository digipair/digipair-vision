import 'reflect-metadata';
import { MetaElement } from '../classes/meta-element';
export declare const property: (options?: {
    default: any;
}) => <T extends MetaElement>(target: T, property: string) => void;
