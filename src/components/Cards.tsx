import { Bin } from "../icons/bin";
import { NoteIcon } from "../icons/note";
import { Share } from "../icons/share";
import { useEffect } from "react";

interface CardProps {
  title: string;
  link: string;
  type: string;
}

export const Card = (props: CardProps) => {
  useEffect(() => {
    if (props.link.includes("twitter.com") || props.link.includes("x.com")) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [props.link]);

  const renderContent = () => {
    let adjustedLink = props.link;
    if (props.link.includes("x.com")) {
      adjustedLink = props.link.replace("x.com", "twitter.com");
    }

    if (adjustedLink.includes("twitter.com")) {
      return (
        <div className="overflow-hidden max-h-80 w-full max-w-full">
          <blockquote
            className="twitter-tweet w-full max-w-full"
            style={{ height: "100%" }}
          >
            <a href={adjustedLink}></a>
          </blockquote>
        </div>
      );
    }

    if (
      adjustedLink.includes("youtube.com") ||
      adjustedLink.includes("youtu.be")
    ) {
      const videoId = adjustedLink.includes("youtube.com")
        ? new URL(adjustedLink).searchParams.get("v")
        : adjustedLink.split("/").pop();

      if (videoId) {
        return (
          <iframe
            className="w-full mt-5 h-48 rounded-lg "
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }
      return <p>Invalid YouTube link</p>;
    }

    if (adjustedLink.includes("medium.com")) {
      return (
        <div>
          <p>Read the full article on Medium:</p>
          <a href={adjustedLink} target="_blank" rel="noopener noreferrer">
            {adjustedLink}
          </a>
        </div>
      );
    }

    if (adjustedLink.includes(".mp3") || adjustedLink.includes(".ogg")) {
      return (
        <div className=" pt-6 rounded-lg w-full mt-4">
          <audio controls className="rounded-lg w-full max-w-full">
            <source src={adjustedLink} type="audio/ogg" />
            <source src={adjustedLink} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    }
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    if (imageExtensions.some((ext) => adjustedLink.endsWith(ext))) {
      const imageUrl = adjustedLink.split("?")[0];

      return (
        <div className="mt-4 rounded-lg overflow-hidden w-full max-w-full">
          <img
            src={imageUrl}
            alt="Image content"
            className="w-full max-h-80 object-cover"
          />
        </div>
      );
    }

    return <p>Unsupported link type</p>;
  };

  return (
    <>
      <div className="p-4 h-auto border-gray-200 border shadow-md bg-white rounded-lg w-full transition duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="pr-2 ml-3">
              <NoteIcon size={20} />
            </div>
            {props.title}
          </div>
          <div className="flex items-center">
            <div className="pr-4 text-gray-600">
              <Share size="md" />
            </div>
            <div className="pr-3 text-gray-600">
              <Bin size="md" />
            </div>
          </div>
        </div>
        <div>{renderContent()}</div>
      </div>
    </>
  );
};
