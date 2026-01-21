import React from "react";
import { forwardRef, memo } from "react";

const CTAButton = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const isDisabled = props.disabled || props.isLoading;

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={props.isLoading}
      className={""}
      {...props}
    >
      {props.isLoading && (
        <span role="status" aria-live="polite" className="sr-only">
          Loading
        </span>
      )}

      {props.children}
    </button>
  );
});

export default memo(CTAButton);
