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

    // Handle YouTube embedding
    if (
      adjustedLink.includes("youtube.com") ||
      adjustedLink.includes("youtu.be")
    ) {
      const videoId = adjustedLink.includes("youtube.com")
        ? new URL(adjustedLink).searchParams.get("v") // Extract video ID from YouTube link
        : adjustedLink.split("/").pop(); // Extract video ID from youtu.be link

      if (videoId) {
        return (
          <iframe
            className="w-full mt-5 h-48"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }
      return <p>Invalid YouTube link</p>;
    }

    return <p>Unsupported link type</p>;
  };
  return (
    <>
      <div className="p-4 h-auto border-gray-200 border shadow-md bg-white rounded-lg w-full">
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
