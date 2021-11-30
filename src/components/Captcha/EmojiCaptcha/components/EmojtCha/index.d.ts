/// <reference types="react" />
import { Emoji } from '../../models/Emojis';
import { EmojiSelectOption } from '../../models/EmojiSelectOption';
interface DataProps {
    emojiSet?: Emoji[];
    drawCount?: number;
    emojiSelectOption?: EmojiSelectOption;
}
interface ActionProps {
    onSelect: (isCorrect: boolean) => void;
}
declare type Props = DataProps & ActionProps;
declare const EmojtCha: ({ emojiSet, drawCount, emojiSelectOption, onSelect, }: Props) => JSX.Element;
export default EmojtCha;
//# sourceMappingURL=index.d.ts.map