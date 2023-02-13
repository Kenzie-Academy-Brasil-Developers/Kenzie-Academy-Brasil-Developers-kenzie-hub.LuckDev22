import { forwardRef } from "react";

export const Fieldset = forwardRef(
  ({ htmlFor, type, id, error, placeholder, labelName, ...rest }, ref) => {
    return (
      <fieldset>
        <label htmlFor={htmlFor}>{labelName}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {error ? <aria-label>{error}</aria-label> : null}
      </fieldset>
    );
  }
);
