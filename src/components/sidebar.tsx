import { Button } from "./ui/button";
import { Plus } from "../icons/plus";
import { Share } from "../icons/share";
import logo from "../assets/brain.png";
import { MainLogo } from "./logo";
import { Card } from "./Cards";
import { TwitterIcon } from "../icons/twittericon";
import { SideItems } from "./sideItems";

export const SideBar = ({
  setModalOpen,
}: {
  setModalOpen: (state: boolean) => void;
}) => {
  return (
    <div className="flex">
      <div className=" transition-all duration-500 bg-white border border-gray-300  shadow-lg  sm:w-80 min-h-screen w-0">
        <div className=" flex justify-center">
          <div className="mt-5">
            <MainLogo src={logo} size={40} />
          </div>
          <p className="text-2xl font-apple mt-6 ml-3 font-bold">
            Second Brain
          </p>
        </div>
        <div className="mt-7">
          <SideItems />
        </div>
      </div>
      <div className=" bg-slate-100 w-full  ">
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
              onClick={() => setModalOpen(true)}
              variant="primary"
              text="Add Contents"
              size="md"
              startIcons={<Plus size="lg" />}
            />
          </div>
        </div>
        <div className="mt-6 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          <Card
            title="twitter post"
            type="twitter"
            link="https://x.com/elonmusk/status/1860477824571724207"
          />
          <Card
            title="youtube post"
            type="youtube"
            link="https://www.youtube.com/watch?v=FXsGCieXm1E"
          />
          <Card
            title="twitter post"
            type="twitter"
            link="https://x.com/AkshitVig4/status/1860419204836655179"
          />
          <Card
            title="twitter post"
            type="twitter"
            link="https://x.com/AkshitVig4/status/1860419204836655179"
          />
          <Card
            title="twitter post"
            type="twitter"
            link="https://x.com/kirat_tw/status/1633685473821425666"
          />
        </div>
      </div>
    </div>
  );
};
