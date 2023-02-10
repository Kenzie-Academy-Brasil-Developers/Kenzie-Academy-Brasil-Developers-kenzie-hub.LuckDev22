export const Button = ({actionFunction,className, children}) => {
  return (
   <button className={className} onClick={() => actionFunction()}>{children}</button>
  )
}
