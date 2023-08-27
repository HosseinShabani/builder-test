import { LayerItem } from "../components/elements";
import { LayersIcon } from "../components/icon";
import { useIframe } from "../hooks";

function Home() {
  const { setIframe, rootFiber } = useIframe();

  return (
    <div className="w-full min-h-screen flex gap-10 antialiased">
      <aside className="w-72 bg-slate-900">
        <h3 className="text-white pl-6 my-6 font-medium text-xl flex items-center gap-1.5">
          <LayersIcon />
          Layers
        </h3>
        <div className="flex flex-col">
          {rootFiber && <LayerItem fiber={rootFiber} />}
        </div>
      </aside>
      <iframe
        ref={setIframe}
        className="flex flex-1 m-10 rounded-2xl shadow-lg"
        src="/template"
      />
    </div>
  );
}

export default Home;
