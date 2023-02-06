import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../Components/Button'

function ButtonPage() {
  const handleClick = ()=>{
    console.log('click')
  }
  return (
    <div>
      <Button 
        secondary
        outline
        rounded
        className="mb-5"
        onClick={handleClick}
      >
        <GoBell/>
        Button 1
      </Button>
      <Button danger outline onMouseEnter={handleClick}>
        <GoCloudDownload/>
        Button 2
      </Button>
      <Button warning onMouseLeave={handleClick}>
        <GoDatabase/>
        Button 3
      </Button>
      <Button primary rounded>
        Button 4
      </Button>
    </div>
  )
}

export default ButtonPage
