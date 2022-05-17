import React from "react";
import { renderWithTheme } from "../../testHelpers";
import {Card} from "../../components/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
      <Card>Test</Card>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnylx lfuKQu"
      >
        Test
      </div>
    </DocumentFragment>
  `);
});
