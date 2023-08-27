import { useEffect, useState } from "react";
import { create } from "zustand";

import { getRootFiber } from "../utils";

const useIframeDoc = create((set) => ({
  iframeDoc: null,
  setIframeDoc: (iframeDoc) => set({ iframeDoc }),
}));

const useIframe = () => {
  const { iframeDoc, setIframeDoc } = useIframeDoc((state) => ({
    iframeDoc: state.iframeDoc,
    setIframeDoc: state.setIframeDoc,
  }));
  const [iframe, setIframe] = useState(null);
  const [rootFiber, setRootFiber] = useState(null);

  const onLoad = () => {
    const iframeDoc = iframe.contentWindow?.document || iframe.contentDocument;
    const iframeBody = iframeDoc.querySelector("body > div > div");
    setRootFiber(getRootFiber(iframeBody));
    setIframeDoc(iframeDoc);
  };

  useEffect(() => {
    iframe?.addEventListener("load", onLoad);
    return () => {
      iframe?.removeEventListener("load", onLoad);
    };
  }, [iframe]);

  const addElement = (el) => {
    iframeDoc.body.appendChild(el);
  };

  return { setIframe, rootFiber, iframeDoc, addElement };
};

export { useIframe };
