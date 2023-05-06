import useCheked from "../hooks/useCheked";
import Sidebar from "./Sidebar";

export function Content() {
  const checkedOptions = useCheked();

  return (
    <div className="flex flex-1 bg-slate-900  flex-wrap overflow-auto lg:flex-nowrap">
      <div className="flex flex-1 min-w-[300px] min-h-[200px] m-2  shadow-md md:min-w-[350px] lg:flex-[0.5]  lg:min-w-[250px]">
        <Sidebar {...checkedOptions} />
      </div>

      <div className="flex flex-1 p-2 overflow-x-auto min-w-[300px] min-h-[200px] bg-gray-950 md:min-w-[350px] lg:min-w-[250px]">
        Editor svg input
      </div>

      <div className="flex flex-1 p-2 overflow-x-auto min-w-[300px] min-h-[200px] relative md:min-w-[350px] lg:min-w-[250px]">
        Button <br />
        Editor readOnly
      </div>
    </div>
  );
}
