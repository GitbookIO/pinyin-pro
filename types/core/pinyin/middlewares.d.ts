import type { SingleWordResult } from "../../common/type";
import { CompleteOptions } from "./index";
export declare const validateType: (word: unknown) => boolean;
export declare const middleWareNonZh: (list: SingleWordResult[], options: CompleteOptions) => SingleWordResult[];
export declare const middlewareMultiple: (word: string, options: CompleteOptions) => SingleWordResult[] | false;
export declare const middlewarePattern: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareToneType: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareV: (list: SingleWordResult[], options: CompleteOptions) => void;
export declare const middlewareType: (list: SingleWordResult[], options: CompleteOptions, word: string) => string | string[] | {
    origin: string;
    pinyin: string;
    initial: string;
    final: string;
    first: string;
    finalHead: string;
    finalBody: string;
    finalTail: string;
    num: number;
    isZh: boolean;
    polyphonic: string[];
    inZhRange: boolean;
}[];
export declare const middlewareToneSandhi: (list: SingleWordResult[], toneSandhi: boolean) => SingleWordResult[];
