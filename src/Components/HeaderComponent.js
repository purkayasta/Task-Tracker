import { Button } from "./ButtonComponent"

export const HeaderComponent = ({ onAction, btnName, btnColor }) => {
  return (
    <header className='header'>
      <h2>Task Tracker </h2>
      <Button btnName={btnName} onAction={onAction} btnBgColor={btnColor} />
    </header>
  )
};
