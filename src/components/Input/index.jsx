import { forwardRef } from "react";

export const Fieldset = forwardRef(
  ({ htmlFor, type, id, error, placeholder, labelName, ...register }, ref) => {
    return (
      <fieldset>
        <label htmlFor={htmlFor}>{labelName}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...register}
        />
        {error ? <aria-label>{error}</aria-label> : null}
      </fieldset>
    );
  }
);
