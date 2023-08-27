export function getRootFiber(domEl) {
  const fiberKey = Object.keys(domEl || {}).find((key) =>
    key.startsWith("__reactFiber$")
  );
  const rootFiber = domEl[fiberKey];
  return rootFiber;
}
