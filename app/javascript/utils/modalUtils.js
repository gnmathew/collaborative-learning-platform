export const closeModal = (id = null) => {
  const modalElement = id ? document.getElementById(`exampleModal-${id}`) : document.getElementById('exampleModal')

  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.remove();
  }
};