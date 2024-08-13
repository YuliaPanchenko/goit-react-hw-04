import ReactModal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, imageUrl, imageAlt }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      // ariaHideApp={false} // Для уникнення помилки в консолі під час розробки
    >
      <img src={imageUrl} alt={imageAlt} className={css.modalImage} />
    </ReactModal>
  );
};

export default ImageModal;
