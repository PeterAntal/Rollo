export const disadvantage = "disadvantage";
export const fail = "fail";
export const number = "number";

const glyphs: { [key: string]: string } = {};
glyphs[disadvantage] = "D";
glyphs[number] = "";
glyphs[fail] = "F";

export function mapGlyph(identifier: string, count: number): string {
    const glyph = glyphs[identifier];
    return glyph != null ? glyph.repeat(count) : count.toString();
}
