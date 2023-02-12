export interface ElviraLine {
    readonly type: string;
}

export function interpret(text: string): ElviraLine | undefined {
    const identifier = text.substring(0, 4);
    if (identifier.match(/\d{4}/)) {
        return {type: identifier};
    }
}
