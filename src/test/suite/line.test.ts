import * as assert from 'assert';

import * as elvira from "../../line";

suite("Elvira line interpretation", () => {
    test("interpret empty line is undefined", () => {
        assert.strictEqual(elvira.interpret(""), undefined);
    });
    test("interpret 1000 line as document header", () => {
        const interpretation = elvira.interpret("1000");
        assert.ok(interpretation);
        assert.strictEqual(interpretation?.type, "1000");
    });
});
