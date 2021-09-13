export default () => {
  const addLoadedClassToBody = () => {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
  };

  window.addEventListener(`load`, () => {
    addLoadedClassToBody();
  });
};
