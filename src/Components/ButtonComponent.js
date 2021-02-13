export const Button = ({ btnName, btnBgColor }) => {
  return (
    <button className='btn' style={{ backgroundColor: btnBgColor }} >{btnName}</button>
  )
};

Button.defaultProps = {
  btnBgColor: 'black'
};