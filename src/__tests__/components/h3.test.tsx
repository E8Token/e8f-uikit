import React from "react";
import { renderWithTheme } from "../../testHelpers";
import H3 from "../../components/H3";

it("renders correctly", () => {
    const { asFragment } = renderWithTheme(
        <H3>text</H3>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bczRLJ fxpCkF"
        color="#ffffff"
        font-size="20px"
        font-style="normal"
        font-weight="700"
        letter-spacing="0.055em"
      >
        text
      </div>
    </DocumentFragment>
  `);
});
