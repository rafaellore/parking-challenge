import { render, screen, waitFor } from "@testing-library/react";

import Card from "./index";

describe("Card Component", () => {
  test("deve exibir um erro caso não tenha carregado nada", () => {
    render(<Card />);

    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();
  });

});
