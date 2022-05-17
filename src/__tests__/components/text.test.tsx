import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
    const { asFragment } = renderWithTheme(
        <Text>text</Text>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnylx leJznL"
        color="#ffffff"
        font-size="16px"
        font-style="bold"
        font-weight="400"
        letter-spacing="0.055em"
      >
        text
      </div>
    </DocumentFragment>
  `);
});
