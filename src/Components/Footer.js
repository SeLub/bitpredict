import React,{useContext} from 'react'
import { LanguageContext } from '../context'
import {DICT} from '../lang'

const Footer = (props) => {
	const [langContext] = useContext(LanguageContext);
  return(
  	
      <footer className="pt-3 mt-4 text-muted border-top">
      {DICT[`FooterCopyright.${langContext}`]}&nbsp;&copy; 2021
    </footer>
  )
}

export default Footer