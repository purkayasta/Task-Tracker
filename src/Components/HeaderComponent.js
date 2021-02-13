import { Button } from "./ButtonComponent"

const HeaderComponent = () => {
  return (
    <header className='header'>
      <h2>Task Tracker </h2>
      <Button btnName='Add' />
    </header>
  )
};

export default HeaderComponent;
