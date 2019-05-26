import React from "react";
import "./DieGlyphs.css";
import { css } from "@uifabric/utilities";
export const advantage = "advantage";
export const success = "success";
export const triumph = "triumph";
export const despair = "despair";
export const number = "number";
export const force = "force";

const glyphs: {
    [key: string]: (count: number) => JSX.Element;
} = {};
glyphs[advantage] = (count: number) => {
    const glyph = count > 0 ? "advantage" : "disadvantage";
    return <span className={css("die-glyph", glyph)} />;
};
glyphs[success] = (count: number) => {
    const glyph = count > 0 ? "success" : "failure";
    return <span className={css("die-glyph", glyph)} />;
};
glyphs[triumph] = (count: number) => {
    return <span className={css("die-glyph", "triumph")} />;
};
glyphs[despair] = (count: number) => {
    return <span className={css("die-glyph", "despair")} />;
};

glyphs[force] = (count: number) => {
    const glyph = count > 0 ? "light-side" : "dark-side";
    return <span className={css("die-glyph", glyph)} />;
};

export function mapGlyph(identifier: string, value: number): JSX.Element {
    const glyph = glyphs[identifier];
    const absValue = Math.abs(value);
    const content =
        glyph !== undefined
            ? repeat(glyph(value), absValue)
            : absValue.toString();
    return (
        <>
            <span key={identifier}>{content}</span>
            <br key={identifier + "br"} />
        </>
    );
}

function repeat(element: JSX.Element, count: number): JSX.Element {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(element);
        if (i !== count - 1) {
            result.push(<br />);
        }
    }
    return <>{result}</>;
}
