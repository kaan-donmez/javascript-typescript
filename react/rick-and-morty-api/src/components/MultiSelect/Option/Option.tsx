import { STYLES } from "@constants/Styles";
import TextHighlight from "@utils/TextHighlight";
import React, { useState } from "react";
import { components } from "react-select";
import "./Option.css";

export const InputOption: React.FC = (props: any) => {
  const {
    label,
    data,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerProps,
    ...rest
  } = props;

  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  let background = STYLES.TRANSPARENT;
  if (isFocused) background = STYLES.FOCUSED;
  if (isActive) background = STYLES.ACTIVE;

  const style = {
    alignItems: STYLES.ALIGN_ITEMS,
    backgroundColor: background,
    color: STYLES.COLOR,
    display: STYLES.DISPLAY,
  };

  const otherProps = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      label={label}
      data={data}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={otherProps}
    >
      <input type="checkbox" checked={isSelected} readOnly />
      <div className="row">
        <div className="column">
          <img className="avatar" src={data.image} alt="image" />
        </div>
        <div className="column">
          <div>
            <TextHighlight input={data.inputValue} label={label} />
          </div>
          <div className="episode">{data.episode}</div>
        </div>
      </div>
    </components.Option>
  );
};
