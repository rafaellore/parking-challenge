import { render, screen } from "@testing-library/react";

import Data from "./index";

describe("Data Component", () => {
  test("deve exibir um loading caso não tenha carregado nada", () => {
    render(<Data />);

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
