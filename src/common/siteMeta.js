export const SITE_VERSION = "v0";
export const SITE_BASE_PATH = `/${SITE_VERSION}`;

export const withBasePath = (path = "") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalized === "/" ? "" : normalized}`;
};
