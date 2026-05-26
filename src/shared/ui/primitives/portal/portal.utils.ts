const DEFAULT_PORTAL_ID = 'portal-root';

export const getPortalRoot = (id?: string): HTMLElement => {
  const portalId = id ?? DEFAULT_PORTAL_ID;
  let element = document.getElementById(portalId);

  if (!element) {
    element = document.createElement('div');
    element.id = portalId;
    document.body.appendChild(element);
  }

  return element;
};
