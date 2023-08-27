import { useRef, useState } from "react";
import cn from "classnames";

import { getComponentNameFromFiber } from "../../utils";
import { useIframe, useLayers, useUniqueId } from "../../hooks";
import {
  ArrowFill,
  ComponentIcon,
  ContainerIcon,
  ImageIcon,
  SvgIcon,
  TextIcon,
} from "../icon";

const INDENT_OFFSET = 20;
const DEFAULT_PADDING = 24;

const LayerItem = ({ fiber, indentation = 0 }) => {
  const uid = useUniqueId();
  const { addElement } = useIframe();
  const hoverEl = useRef(document.createElement("div")).current;
  const selected = useLayers((state) => state.selected);
  const setSelected = useLayers((state) => state.setSelected);
  const [showchild, setShowChild] = useState(true);
  const [componentName, isComponent] = getComponentNameFromFiber(fiber);

  const renderIcon = () => {
    if (isComponent) return <ComponentIcon />;
    switch (componentName) {
      default:
        return null;
      case "svg":
      case "circle":
      case "path":
        return <SvgIcon size={14} />;
      case "img":
        return <ImageIcon />;
      case "p":
      case "span":
      case "dt":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "Text":
        return <TextIcon />;
      case "div":
      case "main":
      case "dl":
      case "dd":
      case "button":
        return <ContainerIcon size={14} />;
    }
  };

  const onMouseEnter = () => {
    const node = isComponent ? fiber?.child?.stateNode : fiber?.stateNode;
    if (!node) return;
    const { width, height, left, top } = node.getBoundingClientRect();
    hoverEl.setAttribute(
      "style",
      `width:${width}px;height:${height}px;left:${left}px;top:${top}px;position:absolute;border:solid 1px #D2FF4C;`
    );
    addElement(hoverEl);
  };

  const onMouseLeave = () => {
    hoverEl.remove();
  };

  if (!componentName) return null;
  return (
    <>
      <div
        className={cn("flex flex-col", {
          "bg-primary/5": selected === uid && !isComponent,
          "bg-conponent/5": selected === uid && isComponent,
        })}
      >
        <div
          onClick={() => setSelected(uid)}
          onDoubleClick={() => setShowChild((prevState) => !prevState)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={cn(
            "flex relative gap-1 outline-primary/70 cursor-default select-none outline outline-0 hover:outline-1 h-7 items-center px-1 box-border",
            {
              "!outline-conponent/70": isComponent,
              "bg-primary/30": selected === uid && !isComponent,
              "bg-conponent/30": selected === uid && isComponent,
            }
          )}
          style={{
            paddingLeft: `${indentation * INDENT_OFFSET + DEFAULT_PADDING}px`,
          }}
        >
          <div
            className="absolute left-0 h-full"
            style={{
              marginLeft: `${DEFAULT_PADDING}px`,
              width: `${indentation * INDENT_OFFSET}px`,
            }}
          >
            {[...Array.from({ length: indentation })].map((__, index) => (
              <span
                key={index}
                className="w-0.5 bg-white/5 h-full absolute top-0"
                style={{
                  left: `${index * INDENT_OFFSET + 6}px`,
                }}
              />
            ))}
          </div>
          <div
            onClick={() => setShowChild((prevState) => !prevState)}
            className={cn("w-4 h-full flex items-center justify-center", {
              "cursor-pointer": Boolean(fiber.child),
            })}
          >
            {fiber.child && (
              <ArrowFill
                size={8}
                className={cn("opacity-30 duration-150", {
                  "rotate-90": showchild,
                })}
              />
            )}
          </div>
          <div className="w-4 h-4 mr-1 flex items-center justify-center">
            {renderIcon()}
          </div>
          <span
            className={cn("text-white/90 font-medium text-sm capitalize", {
              "!text-conponent !text-base": isComponent,
            })}
          >
            {componentName}
          </span>
        </div>
        <div className="flex flex-col">
          {fiber.child && showchild && (
            <LayerItem fiber={fiber.child} indentation={indentation + 1} />
          )}
        </div>
      </div>
      {fiber.sibling && (
        <LayerItem fiber={fiber.sibling} indentation={indentation} />
      )}
    </>
  );
};

export { LayerItem };
