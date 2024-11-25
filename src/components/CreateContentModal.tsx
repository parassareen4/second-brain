import { useRef, useState } from "react";
import { Close } from "../icons/close";
import { InputComp } from "./input";
import { Button } from "./ui/button";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Image = "image",
  Audio = "audio",
  Medium = "medium",
}

export const CreateContentModal = ({ open, onClose }: any) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addcontent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      "http://localhost:3002/api/v1/content",
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  return (
    <>
      {open && (
        <div className="h-screen font-apple w-screen top-0 left-0  bg-opacity-50 fixed bg-slate-500  flex justify-center items-center">
          <span className=" h-custom-h w-custom-h bg-white opacity-100 p-4 rounded-md">
            <div onClick={onClose} className="flex justify-end">
              <Close size="lg" />
            </div>
            <div className="flex justify-center text-3xl font-bold">
              Add Content
            </div>
            <div className=" pt-7">
              <div className=" flex justify-center">
                <InputComp
                  width="full"
                  reference={titleRef}
                  placeholder="title"
                />
              </div>
              <div className=" flex justify-center">
                <InputComp
                  width="full"
                  reference={linkRef}
                  placeholder="link"
                />
              </div>
            </div>
            <div className="flex pt-10">
              <h1 className=" font-bold text-lg">Type -</h1>
              <div className="flex gap-2 pl-3">
                <Button
                  size="sm"
                  text="youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                />
                <Button
                  size="sm"
                  text="twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                />
                <Button
                  size="sm"
                  text="image"
                  variant={type === ContentType.Image ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Image);
                  }}
                />
                <Button
                  size="sm"
                  text="audio"
                  variant={type === ContentType.Audio ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Audio);
                  }}
                />
                <Button
                  size="sm"
                  text="medium"
                  variant={
                    type === ContentType.Medium ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Medium);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center pt-16">
              <Button
                onClick={addcontent}
                modalwidth="full"
                center={true}
                variant="primary"
                size="lg"
                text="Submit"
              />
            </div>
          </span>
        </div>
      )}
    </>
  );
};