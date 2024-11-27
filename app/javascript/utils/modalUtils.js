export const closeModal = (id = null) => {
  const modalElement = id
    ? document.getElementById(`exampleModal-${id}`)
    : document.getElementById('exampleModal');

  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.removeAttribute('aria-modal');
    modalElement.removeAttribute('role');

    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.remove();
  }
};
