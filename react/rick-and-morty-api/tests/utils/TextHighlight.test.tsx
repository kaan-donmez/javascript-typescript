import { render } from "@testing-library/react";
import TextHighlight from "../../src/utils/TextHighlight";

describe("TextHighlight", () => {
  it("should render the TextHighlight component with proper input value", () => {
    const { asFragment } = render(
      <TextHighlight input="summ" label="Summer summer" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the TextHighlight component with empty input value", () => {
    const { asFragment } = render(<TextHighlight input="" label="Summer" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
