export const Fieldset = ({ htmlFor, type, id, placeholder, children }) => {
  return (
    <fieldset>
      <label htmlFor={htmlFor}>{children}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </fieldset>
  );
};
