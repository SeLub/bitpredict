import React, {useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalOne from '../lang/modalOne'
import { LanguageContext } from '../context'

const ShowModal = ({modal, showModal, setShowModal}) =>{

  const [langContext] = useContext(LanguageContext);

  let text = '', title = ''
  if (modal === 'modalOne') {
    text = <ModalOne />
    langContext === 'RU' ? title = 'Как это работает - Немного теории' : title = 'How It Works - A bit of theory' 
  } else {
    text = `Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!`
  }


  return(
    <>
          <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {text}
        </Modal.Body>
      </Modal>
      </>
    )
}

export default ShowModal