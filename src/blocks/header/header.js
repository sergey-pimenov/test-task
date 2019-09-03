const header = {
  navigationButtonNode: null,
  headerNode: null,

  init() {
    header.setNodes();
    header.setListeners();
  },

  setNodes() {
    header.navigationButtonNode = document.querySelector('.header .navigationButton');
    header.headerNode = document.querySelector('.header');
  },

  setListeners() {
    header.navigationButtonNode.addEventListener('click', header.toggleMenu);
  },

  toggleMenu() {
    header.headerNode.classList.toggle('showMenu');
  }
};

export default header;