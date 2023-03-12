const toggleMenu = (obj) => {
  const element = obj.current.classList
  if (element.contains('menu-open')) {
    element.remove('menu-open');
    element.add('menu-close');
  } else if (element.contains('menu-close')) {
    element.remove('menu-close');
    element.add('menu-open');
  } else element.add('menu-open');
};

export default toggleMenu;