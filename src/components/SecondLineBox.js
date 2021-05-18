import React from 'react'
import { Modal } from 'bootstrap'
import ModalBig from './ModalBig1'
import ModalBig2 from './ModalBig2'
import ReactHtmlParser from 'react-html-parser';

const SecondLineBox = (props) => {
	let textColor = '', btn_style = ''
	if (props.theme === 'dark') {
		textColor = 'text-white'
		btn_style = 'light'
	} else {
		textColor = 'text-black'
		btn_style = 'secondary'
	}
	return (
      <div className={"col-md-" + props.cols}>
        <div className={"h-100 p-5 " + textColor + " bg-" + props.theme + " rounded-3"}>
          <h2>{props.header}</h2>
          <p>{props.text}</p>
          { props.button ?  ReactHtmlParser(`<button data-bs-toggle="modal" data-bs-target=${props.mod} class="btn btn-outline-${btn_style} type="button">${props.button}</button>`) :''}


<ModalBig /><ModalBig2 />
        </div>
      </div>
      )
}

export default SecondLineBox