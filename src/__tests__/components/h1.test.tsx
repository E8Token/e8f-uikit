import React from "react";
import { renderWithTheme } from "../../testHelpers";
import H1 from "../../components/H1";

it("renders correctly", () => {
    const { asFragment } = renderWithTheme(
        <H1>text</H1>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bczRLJ ioKSYA"
        color="#ffffff"
        font-size="40px"
        font-style="normal"
        font-weight="700"
        letter-spacing="0.055em"
      >
        text
      </div>
    </DocumentFragment>
  `);
});
