import Baruun from "./baruun_tal";
import Zuun from "./orgil";

export default function Home() {
  return (
    <>
      <div className="w-creen h-screen flex ">
        <div className="w-1/2 h-full">
          <Baruun />
        </div>
        <div className=" w-1/2 h-full">
          <Zuun />
        </div>
      </div>
    </>
  );
}
