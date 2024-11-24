import { TwitterIcon } from "../icons/twittericon";
import { YTIcon } from "../icons/ytIcons";

export const SideItems = () => {
  return (
    <div className="ml-5 font-apple">
      <div className="flex transition duration-200 hover:bg-gray-200 w-48 items-center p-3 text-[#414D5D] ">
        <TwitterIcon />
        <p className="pl-5 font-bold">Tweets</p>
      </div>
      <div className=" p-3 transition duration-200 hover:bg-gray-200 w-48 flex items-center text-[#414D5D] ">
        <YTIcon />
        <p className=" pl-5 font-bold">Videos</p>
      </div>
    </div>
  );
};
