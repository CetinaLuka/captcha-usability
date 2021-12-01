export declare type ArityOneFunction = (argument: any) => any;
export declare const compose: (...functions: ArityOneFunction[]) => (argument: any) => any;
export declare const getOrElse: (obj: any, defaultValue: any) => any;
export declare function getOrEmpty<T>(obj: T | undefined): T;
//# sourceMappingURL=Functions.d.ts.map