import React,{useContext} from 'react'
import { Context } from '../context'

const Footer = (props) => {
	const [context, setContext] = useContext(Context);
  return(
  	
      <footer className="pt-3 mt-4 text-muted border-top"><div>ComponentB: {context}</div>
      &copy; 2021
    </footer>
  )
}

export default Footer