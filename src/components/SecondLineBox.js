import React from 'react'
import ModalBig from './ModalBig'
import { Modal } from 'bootstrap'
import ReactHtmlParser from 'react-html-parser';

const SecondLineBox = (props) => {
	let textColor = '', btn_style = ''
	if (props.style === 'dark') {
		textColor = 'text-white'
		btn_style = 'light'
	} else {
		textColor = 'text-black'
		btn_style = 'secondary'
	}
	return (
      <div class={"col-md-" + props.cols}>
        <div class={"h-100 p-5 " + textColor + " bg-" + props.style + " rounded-3"}>
          <h2>{props.header}</h2>
          <p>{props.text}</p>
          { props.button ?  ReactHtmlParser(`<button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-${btn_style} type="button">${props.button}</button>`) :''}


<ModalBig />
        </div>
      </div>
      )
}

export default SecondLineBox