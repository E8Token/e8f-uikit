import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Link } from "../../components/Link";

it("renders link correctly", () => {
  const { asFragment } = renderWithTheme(<Link href="https://energy8.io">Link</Link>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="sc-bdnylx gStteT"
        href="https://energy8.io"
      >
        Link
      </a>
    </DocumentFragment>
  `);
});
