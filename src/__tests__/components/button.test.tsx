import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Button from "../../components/Button";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Button handleRoute={() => {}}>Submit</Button>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlnjPT iqDNCf"
      >
        <button
          class="sc-gtssRu brERni"
        >
          Submit
        </button>
      </div>
    </DocumentFragment>
  `);
});
