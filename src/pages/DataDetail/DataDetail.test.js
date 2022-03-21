import { render, screen } from "@testing-library/react";

import DataDetail from "./index";

describe("Data Detail Component", () => {
  test("deve exibir um loading caso não tenha carregado nada", () => {
    render(<DataDetail />);

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});