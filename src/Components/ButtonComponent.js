export const Button = ({ btnName, btnBgColor, onAction }) => {  
  return (
    <button onClick={onAction} className="btn" style={{ backgroundColor: btnBgColor }} >{btnName}</button>
  )
}

Button.defaultProps = {
  btnBgColor: "black"
}