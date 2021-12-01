/// <reference types="react" />
import { Emoji } from '../../models/Emojis';
import { EmojiSelectOption } from '../../models/EmojiSelectOption';
interface DataProps {
    emojis: Emoji[];
    emojiSelectOption?: EmojiSelectOption;
}
interface ActionProps {
    onSelect: (isCorrect: boolean) => void;
}
declare type Props = DataProps & ActionProps;
declare const EmojiSelect: ({ emojis, emojiSelectOption, onSelect, }: Props) => JSX.Element;
export default EmojiSelect;
//# sourceMappingURL=index.d.ts.map