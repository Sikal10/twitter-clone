import {TbCalendarStats} from "react-icons/tb";
import {MdOutlineInsertPhoto, MdOutlineLocationOn} from "react-icons/md";
import {HiOutlineEmojiHappy} from "react-icons/hi";
import {BiPoll} from "react-icons/bi";
import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {Tweet, TweetBody} from "../typings";
import axios from "axios";
import toast from "react-hot-toast";
import {fetchTweets} from "../utils";

interface Props {
    setTweets: Dispatch<SetStateAction<Tweet[]>>
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const TweetBox = ({setTweets}: Props) => {
    const [tweet, setTweet] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [isImageBoxOpen, setIsImageBoxOpen] = useState<boolean>(false);

    const imageInputRef = useRef<HTMLInputElement>(null);

    const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (!imageInputRef?.current?.value) return;

        setImage(imageInputRef.current.value);
        imageInputRef.current.value = "";
        setIsImageBoxOpen(false);
    }

    const postTweet = async () => {
        const tweetInfo: TweetBody = {
            text: tweet,
            username: "sikal",
            profileImg: "https://pbs.twimg.com/media/FN5VfLLXoAYpdOE?format=jpg&name=large",
            image
        }

        const result = await fetch(`/api/addTweet`, {
            body: JSON.stringify(tweetInfo),
            method: "POST"
        });

        const json = await result.json();

        const newTweets = await fetchTweets();
        setTweets(newTweets);

        toast("Tweet Posted", {
            icon: "🚀"
        });

        return json
    }

    const handleSubmitTweet = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await postTweet();
        setTweet("");
        setImage("");
        setIsImageBoxOpen(false);
    }

    return (
        <div className={"flex space-x-2 p-5"}>
            <img className={"mt-4 h-10 w-10 md:h-14 md:w-14 object-cover rounded-full"} src="https://links.papareact.com/gll" alt=""/>

            <div className={"flex flex-1 items-center pl-2"}>
                <form className={"flex flex-col flex-1"} action="">
                    <input value={tweet} onChange={e => setTweet(e.target.value)} type="text" className={"h-24 w-full text-xl outline-0 placeholder:text-base md:placeholder:text-xl"} placeholder={"What's happening?"}/>

                    <div className={"flex items-center"}>
                        <div className={"flex flex-1 gap-1 sm:gap-2 text-twitter"}>
                            <MdOutlineInsertPhoto onClick={() => setIsImageBoxOpen(!isImageBoxOpen)} className={"text-2xl cursor-pointer transition-transform duration-150 ease-out hover:scale-150"} />
                            <BiPoll className={"text-2xl"} />
                            <HiOutlineEmojiHappy className={"text-2xl"} />
                            <TbCalendarStats className={"text-2xl"} />
                            <MdOutlineLocationOn className={"text-2xl"} />
                        </div>

                        <button onClick={handleSubmitTweet} disabled={!tweet} className={"bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40 disabled:cursor-not-allowed"}>Tweet</button>
                    </div>

                    {/*image-url-box*/}

                    {isImageBoxOpen && <form className={"border-none mt-5 flex rounded-lg bg-twitter/30 py-2 px-4 "}>
                        <input ref={imageInputRef} className={"flex-1 bg-transparent p-2 text-twitter outline-0 placeholder:text-twitter"} type="text" placeholder={"Enter IMAGE URL..."}/>
                        <button onClick={addImageToTweet} type={"submit"} className={"font-semibold text-twitter"}>Add Image</button>
                    </form>}

                    {image && <img src={image} className={"mt-10 h-40 w-full rounded-xl object-contain shadow-lg"} alt=""/>}
                </form>
            </div>
        </div>
    );
};

export default TweetBox;