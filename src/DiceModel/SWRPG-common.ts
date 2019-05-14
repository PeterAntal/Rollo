export const advantage = "advantage";
export const success = "success";
export const number = "number";

const glyphs: { [key: string]: string } = {};
glyphs[advantage] = "A";
glyphs[number] = "";
glyphs[success] = "S";

export function mapGlyph(identifier: string, count: number): string {
    const glyph = glyphs[identifier];
    return glyph != null ? glyph.repeat(Math.abs(count)) : count.toString();
}
