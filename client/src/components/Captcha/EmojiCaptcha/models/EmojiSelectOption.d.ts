declare type Color = string;
export interface NameOption {
    nameHighlight?: boolean;
    nameColor?: Color;
}
export interface ItemOption {
    hoverBorderColor?: Color;
    selectedBorderColor?: Color;
    hoverBackgroundColor?: Color;
    selectedBackgroundColor?: Color;
}
export interface EmojiSelectOption {
    name?: NameOption;
    item?: ItemOption;
}
export {};
//# sourceMappingURL=EmojiSelectOption.d.ts.map