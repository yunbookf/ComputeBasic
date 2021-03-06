/*
 * ComputeBasic 0.0.1
 * Author: Han Guoshuai
 * Github: https://github.com/MaiyunNET/ComputeBasic
 */

// --- token 类型 ---
export enum TOKEN_TYPES {
    UNKNOWN,
    SYMBOL,
    STRING,
    FULL_STRING,
    COMMENT,
    DEC_NUMBER,
    HEX_NUMBER,
    OCT_NUMBER,
    REAL_NUMBER,
    BIN_NUMBER,
    REGEXP,
    IDENTITY
}

// --- 每个 token 的类型 ---
export interface TokenEntity {
    readonly "text": string;
    readonly "lower": string;
    readonly "type": TOKEN_TYPES;
}

export interface TokenRefer {
    readonly "token": TokenEntity;
    readonly "row": number;
    readonly "col": number;
}

// --- 编译选项 ---
export interface CompileOption {
    outType?: string;
}

export interface LanguageEntity {
    error: string;
    code: string;
    message: string;
    row: string;
    col: string;
    word: string;
    codeMessage: any;
}

export interface LanguageRefer {
    en: LanguageEntity;
    zhCN: LanguageEntity;
}

// --- 类 ---
export interface Tokenizer {
    tokenize(code: string): TokenRefer[];
}

export interface ComputeBasic {
    expose(funName: string, fun: (...args: any[]) => {}): void;
    setLanguage(lang: string): void;
    compile(code: string, opt?: CompileOption): any;
    compileToString(code: string): string;
}

