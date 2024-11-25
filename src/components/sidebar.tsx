import { Button } from "./ui/button";
import { Plus } from "../icons/plus";
import { Share } from "../icons/share";
import logo from "../assets/brain.png";
import { MainLogo } from "./logo";
import { Card } from "./Cards";
import { SideItems } from "./sideItems";
import { useContent } from "../hooks/useContent";

export const SideBar = ({
  setModalOpen,
}: {
  setModalOpen: (state: boolean) => void;
}) => {
  const { content } = useContent();
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
          <div className=" flex mr-6">
            <div className="mr-4">
              <Button
                variant="secondary"
                text="Share Brains"
                size="md"
                startIcons={<Share size="lg" />}
              />
            </div>
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
          {content.map(({ type, link, title }) => (
            <Card title={title} type={type} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
