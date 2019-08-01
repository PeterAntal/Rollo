import React from "react";
import "./DieGlyphs.css";
import { css } from "@uifabric/utilities";
export const advantage = "advantage";
export const success = "success";
export const triumph = "triumph";
export const despair = "despair";
export const number = "number";
export const light = "light";
export const dark = "dark";

const glyphs: {
    [key: string]: (count: number) => JSX.Element;
} = {};
glyphs[advantage] = (count: number): JSX.Element => {
    const glyph = count > 0 ? "advantage" : "disadvantage";
    return <span className={css("die-glyph", glyph)} />;
};
glyphs[success] = (count: number): JSX.Element => {
    const glyph = count > 0 ? "success" : "failure";
    return <span className={css("die-glyph", glyph)} />;
};
glyphs[triumph] = (count: number): JSX.Element => {
    return <span className={css("die-glyph", "triumph")} />;
};
glyphs[despair] = (count: number): JSX.Element => {
    return <span className={css("die-glyph", "despair")} />;
};
glyphs[light] = (count: number): JSX.Element => {
    return <span key={count} className={css("die-glyph", "light-side")} />;
};
glyphs[dark] = (count: number): JSX.Element => {
    return <span key={count} className={css("die-glyph", "dark-side")} />;
};

export function getGlyph(identifier: string, value: number): JSX.Element {
    const glyph = glyphs[identifier];
    return glyph !== undefined ? repeat(glyph(value), Math.abs(value)) : <></>;
}

export function mapGlyphs(identifier: string, value: number): JSX.Element {
    const glyph = glyphs[identifier];
    const absValue = Math.abs(value);
    const content =
        glyph !== undefined
            ? repeat(glyph(value), absValue, true)
            : absValue.toString();
    return (
        <>
            <span key={identifier}>{content}</span>
            <br key={identifier + "br"} />
        </>
    );
}

function repeat(
    element: JSX.Element,
    count: number,
    separate?: boolean
): JSX.Element {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(<span key={i}>{element}</span>);
        if (i !== count - 1 && separate) {
            result.push(<br key={i + "br"} />);
        }
    }
    return <>{result}</>;
}
