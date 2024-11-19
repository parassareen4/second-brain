import { Button } from "./components/ui/button";
import { Plus } from "./icons/plus";
import { Share } from "./icons/share";

export const SideBar = () => {
  return (
    <div className="flex">
      <div className=" transition-all duration-500 bg-white border border-gray-300  shadow-lg  sm:w-80 h-screen w-0">
        <p className="text-xl font-apple mt-6 ml-4 font-bold">Second Brains</p>
      </div>
      <div className="bg-white w-full  ">
        <div>
          <div className="flex justify-between mt-8">
            <p className="flex items-center font-apple font-bold ml-10 text-2xl">
              All Notes
            </p>
            <div className=" mr-6">
              <Button
                variant="secondary"
                text="Share Brains"
                size="md"
                startIcons={<Share size="lg" />}
              />
              <Button
                variant="primary"
                text="Add Contents"
                size="md"
                startIcons={<Plus size="lg" />}
              />
            </div>
          </div>
        </div>
        <div className="mt-9 gap-5 grid grid-cols-12 ">
          <div
            className=" border-gray-200 border shadow-md
 ml-10 rounded-lg h-80 bg-white col-span-4"
          >
            d
          </div>
          <div className=" border-gray-200 border shadow-md ml-4 mr-3 bg-white rounded-lg col-span-4">
            d
          </div>
          <div className=" border-gray-200 border shadow-md bg-white rounded-lg col-span-4 mr-6">
            d
          </div>
        </div>
      </div>
    </div>
  );
};
