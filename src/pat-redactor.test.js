import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./pat-redactor";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-redactor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `
          <textarea class="pat-redactor"></textarea>
        `;

        pattern.init(document.querySelector(".pat-redactor"));
        await utils.timeout(1);

        expect(document.querySelectorAll(".redactor-toolbar").length).toBe(1);

        done();
    });
});
