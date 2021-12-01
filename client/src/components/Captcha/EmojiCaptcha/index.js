import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Box = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-family: 'PT Sans', sans-serif;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n"], ["\n  max-width: 20rem;\n  font-family: 'PT Sans', sans-serif;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n"])));
var templateObject_1$1;

var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (argument) {
        return functions.reduceRight(function (acc, curr) { return curr(acc); }, argument);
    };
};
var getOrElse = function (obj, defaultValue) { return obj ? obj : defaultValue; };
function getOrEmpty(obj) {
    return obj ? obj : {};
}

function swap(a, b) {
    return [b, a];
}
var shuffled = function (emojiList) {
    var newShuffled = __spreadArray([], emojiList);
    for (var i = emojiList.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var _a = swap(newShuffled[i], newShuffled[j]), a = _a[0], b = _a[1];
        newShuffled[i] = a;
        newShuffled[j] = b;
    }
    return newShuffled;
};
var copy = function (emojiList) { return __spreadArray([], emojiList); };
var takeFor = function (emojiList, n) {
    return emojiList.reduce(function (accumulator, currentEmoji, currentIndex) {
        return currentIndex < n ? accumulator.concat(currentEmoji) : accumulator;
    }, []);
};
var takeRandom = function (emojiList) { return shuffled(emojiList)[0]; };
var shuffledCopy = function (emojiList) {
    return compose(shuffled, copy)(emojiList);
};

var defaultEmojiSet = [
	{
		codes: "1F412",
		char: "🐒",
		name: "opico",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F98D",
		char: "🦍",
		name: "gorilo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9A7",
		char: "🦧",
		name: "orangutana",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F415",
		char: "🐕",
		name: "psa",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9AE",
		char: "🦮",
		name: "psa vodiča",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F429",
		char: "🐩",
		name: "poodla",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F43A",
		char: "🐺",
		name: "volka",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F98A",
		char: "🦊",
		name: "lisico",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F99D",
		char: "🦝",
		name: "rakuna",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F408",
		char: "🐈",
		name: "mačko",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F981",
		char: "🦁",
		name: "leva",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F405",
		char: "🐅",
		name: "tigra",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F406",
		char: "🐆",
		name: "leoparda",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F40E",
		char: "🐎",
		name: "konja",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F984",
		char: "🦄",
		name: "samoroga",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F993",
		char: "🦓",
		name: "zebro",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F98C",
		char: "🦌",
		name: "jelena",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9AC",
		char: "🦬",
		name: "bizona",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F402",
		char: "🐂",
		name: "vola",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F404",
		char: "🐄",
		name: "kravo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F416",
		char: "🐖",
		name: "prašiča",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F417",
		char: "🐗",
		name: "divjega prašiča",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F410",
		char: "🐐",
		name: "kozo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F42A",
		char: "🐪",
		name: "kamelo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F999",
		char: "🦙",
		name: "lamo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F992",
		char: "🦒",
		name: "žirafo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F418",
		char: "🐘",
		name: "slona",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9A3",
		char: "🦣",
		name: "mamuta",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F98F",
		char: "🦏",
		name: "nosoroga",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F99B",
		char: "🦛",
		name: "povodnega konja",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F401",
		char: "🐁",
		name: "miš",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F400",
		char: "🐀",
		name: "podgano",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F439",
		char: "🐹",
		name: "hrčka",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F407",
		char: "🐇",
		name: "zajca",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F43F",
		char: "🐿",
		name: "veverico",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9AB",
		char: "🦫",
		name: "bobra",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F994",
		char: "🦔",
		name: "ježa",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F987",
		char: "🦇",
		name: "netopirja",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F43B",
		char: "🐻",
		name: "medveda",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F428",
		char: "🐨",
		name: "koalo",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F43C",
		char: "🐼",
		name: "pando",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	},
	{
		codes: "1F9A5",
		char: "🦥",
		name: "lenivca",
		category: "Animals & Nature (animal-mammal)",
		group: "Animals & Nature",
		subgroup: "animal-mammal"
	}
];

/* eslint-disable no-irregular-whitespace  */
/* eslint-disable import/prefer-default-export */
var messup = function (str) {
    return str
        .split('')
        .map(function (v) { return (Math.random() > 0.5 ? v + "\u200B" : v); })
        .map(function (v) { return (Math.random() > 0.7 ? v + "\u200B" : v); })
        .join('​');
};
var toCapitalCase = function (str) {
    return str
        .split('')
        .map(function (c, index) { return (index === 0 ? c.toUpperCase() : c); })
        .join('');
};
var encloseWith = function (encloser) { return function (str) {
    return encloser + str + encloser;
}; };
var encloseWithQuote = function (str) { return encloseWith('"')(str); };
var formattedMessedUp = function (str) {
    return compose(messup, encloseWithQuote, toCapitalCase)(str);
};

var Title = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: white;\n  min-width: 210px;\n  padding: 5px 10px;\n  margin: 0 0 10px 0;\n  border-radius: 5px;\n  text-align: center;\n"], ["\n  background: white;\n  min-width: 210px;\n  padding: 5px 10px;\n  margin: 0 0 10px 0;\n  border-radius: 5px;\n  text-align: center;\n"])));
var Name = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (_a) {
    var nameOption = _a.nameOption;
    return nameOption.nameHighlight && getOrElse(nameOption.nameColor, 'red');
});
var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var Items = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  width: 90%;\n  min-width: 210px;\n  font-size: 1.7rem;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  width: 90%;\n  min-width: 210px;\n  font-size: 1.6rem;\n  justify-content: space-between;\n"])));
var Item = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  outline: none;\n  border: 2px solid\n    ", ";\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n  vertical-align: middle;\n\n  &:hover {\n    background: ", ";\n    border: '2px solid ", "';\n"], ["\n  background: ",
    ";\n  outline: none;\n  border: 2px solid\n    ",
    ";\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n  vertical-align: middle;\n\n  &:hover {\n    background: ",
    ";\n    border: '2px solid ",
    "';\n"])), function (props) {
    return props.isSelected
        ? getOrElse(props.itemOption.selectedBackgroundColor, 'rgb(231, 231, 231)') + "!important"
        : 'white';
}, function (props) {
    return props.isSelected
        ? getOrElse(props.itemOption.selectedBorderColor, 'gray')
        : 'white';
}, function (_a) {
    var itemOption = _a.itemOption;
    return getOrElse(itemOption.hoverBackgroundColor, 'rgb(231, 231, 231)');
}, function (_a) {
    var itemOption = _a.itemOption;
    return getOrElse(itemOption.hoverBorderColor, 'lightgray');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var EmojiSelect = function (_a) {
    var emojis = _a.emojis, emojiSelectOption = _a.emojiSelectOption, onSelect = _a.onSelect;
    var correctEmoji = useState(takeRandom(emojis))[0];
    var _b = useState(-1), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var handleSelect = useCallback(function (index) {
        onSelect(correctEmoji === emojis[index]);
        setSelectedIndex(index);
    }, [correctEmoji, emojis, onSelect]);
    var mappedElement = emojis.map(function (emoji, index) { return (React.createElement(Item, { isSelected: selectedIndex === index, itemOption: getOrEmpty(emojiSelectOption === null || emojiSelectOption === void 0 ? void 0 : emojiSelectOption.item), onClick: function () { return handleSelect(index); }, key: emoji.char }, emoji.char)); });
    return (React.createElement(Container, null,
        React.createElement(Title, null,
            "Prosim kliknite na ",
            ' ',
            React.createElement(Name, { nameOption: getOrEmpty(emojiSelectOption === null || emojiSelectOption === void 0 ? void 0 : emojiSelectOption.name) }, formattedMessedUp(correctEmoji.name))),
        React.createElement(Items, null, mappedElement)));
};

var EmojtCha = function (_a) {
    var _b = _a.emojiSet, emojiSet = _b === void 0 ? defaultEmojiSet : _b, _c = _a.drawCount, drawCount = _c === void 0 ? 6 : _c, emojiSelectOption = _a.emojiSelectOption, onSelect = _a.onSelect;
    var emojis = useState(emojiSet)[0];
    var _d = useState(shuffledCopy(emojis)), roster = _d[0], setRoster = _d[1];
    var emojiSelection = useState(takeFor(roster, drawCount))[0];
    useEffect(function () {
        setRoster(shuffledCopy(emojis));
    }, [emojis]);
    return (React.createElement(Box, null,
        React.createElement(EmojiSelect, { key: emojiSelection.map(function (v) { return v.char; }).join(''), emojis: emojiSelection, emojiSelectOption: emojiSelectOption, onSelect: onSelect })));
};

export { EmojtCha };
