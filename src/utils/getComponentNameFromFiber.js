import {
  FunctionComponent,
  ClassComponent,
  IndeterminateComponent,
  HostComponent,
  HostHoistable,
  HostSingleton,
  MemoComponent,
  SimpleMemoComponent,
  IncompleteClassComponent,
} from "../constants/ReactFiberTypes";

export function getComponentNameFromFiber(fiber) {
  const { tag, type } = fiber || {};
  switch (tag) {
    case HostHoistable:
    case HostSingleton:
    case HostComponent:
      // Host component type is the display name (e.g. "div", "View")
      return [type, false];
    // Single text in dom
    // case HostText:
    //   return ["Text", false];
    // The display name for this tags come from the user-provided type:
    case ClassComponent:
    case FunctionComponent:
    case IncompleteClassComponent:
    case IndeterminateComponent:
    case MemoComponent:
    case SimpleMemoComponent:
      if (typeof type === "function") {
        return [type.displayName || type.name || null, true];
      }
      if (typeof type === "string") {
        return [type, true];
      }
      break;
  }

  return [null, false];
}
