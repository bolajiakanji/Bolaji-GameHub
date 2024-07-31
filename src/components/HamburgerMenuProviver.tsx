import { ReactNode, useState } from 'react'
import hamburgerMenuContext from '../state-management/context/hamburgerMenuContext'

interface Props {
    children: ReactNode
}

const HamburgerMenuProviver = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(true)
    
  return (
      <>
          <hamburgerMenuContext.Provider value={{isOpen, setIsOpen}}>
              {children}
          </hamburgerMenuContext.Provider>
      </>
  )
}

export default HamburgerMenuProviver