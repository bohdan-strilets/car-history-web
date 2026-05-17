export const getPortalRoot = (id: string): HTMLElement => {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
  }

  return element;
};
