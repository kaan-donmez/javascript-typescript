import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MultiSelect from "../../src/components/MultiSelect/MultiSelect";

describe("MultiSelect", () => {
  it("should render error message componenet", () => {
    render(<MultiSelect isLoading={true} isError={true} />);
    expect(screen.getByTestId("errorMessage")).toBeInTheDocument();
  });

  it("should render loading message componenet", () => {
    render(<MultiSelect isLoading={true} />);
    expect(screen.getByTestId("loadingMessage")).toBeInTheDocument();
  });

  it("should render the MultiSelect component", () => {
    render(<MultiSelect isLoading={false} />);
    expect(screen.getByTestId("multiSelectForm")).toBeInTheDocument();
  });
});
