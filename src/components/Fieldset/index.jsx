import { forwardRef } from "react";



export const Fieldset = forwardRef(({ htmlFor, type, id,errors, placeholder, labelName , ...rest}, ref) => {
  return (
    <fieldset>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type={type} id={id} placeholder={placeholder} ref={ref}
      {...rest} 
      />
    {errors ?  <aria-label>{errors}</aria-label> : null}
    </fieldset>
  );
});


