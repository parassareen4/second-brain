import { Close } from "../icons/close";
import { InputComp } from "./input";
import { Button } from "./ui/button";

export const CreateContentModal = ({ open, onClose }: any) => {
  return (
    <>
      {open && (
        <div className="h-screen w-screen top-0 left-0  bg-opacity-50 fixed bg-slate-500  flex justify-center items-center">
          <span className=" w-80 bg-white opacity-100 p-4 rounded-md">
            <div onClick={onClose} className="flex justify-end">
              <Close size="lg" />
            </div>
            <div>
              <InputComp placeholder="title" />
              <InputComp placeholder="title" />
              <InputComp placeholder="title" />
            </div>
            <div className="flex justify-center pt-5">
              <Button variant="primary" size="lg" text="Submit" />
            </div>
          </span>
        </div>
      )}
    </>
  );
};
