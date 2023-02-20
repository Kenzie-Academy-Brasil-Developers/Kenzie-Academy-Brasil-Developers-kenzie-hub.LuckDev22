import { forwardRef, useState } from "react";
import {BsEye, BsEyeSlash} from "react-icons/bs"

export const FieldsetPassword = forwardRef(
  ({ htmlFor, type, id, error, placeholder, labelName, ...register }, ref) => {
 
  const [isHidden, setIsHidden] = useState(true);
 
    return (
      <fieldset>
        <label htmlFor={htmlFor}>{labelName}</label>
        <input
          type={isHidden ? "password" : "text"}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...register}
        />
        <button className="btnHidden" type="button" onClick={() => setIsHidden(!isHidden)}>{isHidden ? (<BsEyeSlash/>) : (<BsEye/>)}</button>

        {error ? <aria-label>{error}</aria-label> : null}
      </fieldset>
    );
  }
);





//       {error ? <aria-label>{error}</aria-label> : null}
//     
//     </fieldset>
//   );
// }
// );
