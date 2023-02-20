import { forwardRef, useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/Ai"

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
        <button className="btnHidden" type="button" onClick={() => setIsHidden(!isHidden)}>{isHidden ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</button>

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
