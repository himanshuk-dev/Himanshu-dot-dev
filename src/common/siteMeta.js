export const SITE_VERSION = "v0";
export const SITE_V0_BASE_PATH = `/${SITE_VERSION}`;
export const SITE_V1_BASE_PATH = "/v1";
export const SITE_BASE_PATH = SITE_V0_BASE_PATH;

export const withBasePath = (path = "") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalized === "/" ? "" : normalized}`;
};

export const withV1BasePath = (path = "") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_V1_BASE_PATH}${normalized === "/" ? "" : normalized}`;
};
