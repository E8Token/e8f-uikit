import React from "react";
import { renderWithTheme } from "../../testHelpers";
import {H2} from "../../components/H2";

it("renders correctly", () => {
    const { asFragment } = renderWithTheme(
        <H2>text</H2>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnylx kIfBCo"
        color="#ffffff"
        font-size="36px"
        font-style="normal"
        font-weight="700"
        letter-spacing="0.055em"
      >
        text
      </div>
    </DocumentFragment>
  `);
});
