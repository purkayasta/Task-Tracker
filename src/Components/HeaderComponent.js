import { Button } from "./ButtonComponent";
import { Link } from 'react-router-dom'

export const HeaderComponent = ({ onAction, btnName, btnColor }) => {
  return (
    <header className="header">
      <h2>Task Tracker </h2>
      <Button btnName={btnName} onAction={onAction} btnBgColor={btnColor} />
    </header>
  )
}
