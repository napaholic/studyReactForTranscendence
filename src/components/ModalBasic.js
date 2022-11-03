import React from "react";
import Modal from "react-modal";

function ProjectModal() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        This is a modal
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </>
  );
}

export default ProjectModal;
