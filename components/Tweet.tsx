import React from 'react';
import {Tweet} from "../typings";
import TimeAgo from "react-timeago";
import { HiOutlineHeart} from "react-icons/hi";
import {RiChat1Line} from "react-icons/ri";
import {AiOutlineRetweet} from "react-icons/ai";
import {MdOutlineFileUpload} from "react-icons/md";

interface Props {
    tweet: Tweet
}

const Tweet = ({tweet}: Props) => {
    return (
        <div className={"border-y border-gray-100 p-5"}>
            <div className={"flex gap-4"}>
                <img className={"w-12 h-12 object-cover rounded-full"} src={tweet.profileImg} alt=""/>

                <div>
                    <div className={"flex items-center space-x-1"}>
                        <p className={"text-xl font-semibold"}>{tweet.username}</p>

                        <p className={"hidden sm:inline text-gray-400 text-xs"}>@{tweet.username.replace(/\s+/g, "").toLowerCase()} · </p>

                        <TimeAgo date={tweet._createdAt} className={"text-xs text-gray-500"}/>
                    </div>

                    <p className={"mt-2 mb-3"}>{tweet.text}</p>

                    {tweet.image && <img className={"m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"} src={tweet.image} alt=""/>}
                </div>

            </div>

            <div className={"max-w-[425px] ml-16 mt-2 flex justify-between"}>
                <div className={"flex items-center cursor-pointer text-gray-400 gap-3"}>
                    <RiChat1Line />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-3"}>
                    <AiOutlineRetweet />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-3"}>
                    <HiOutlineHeart />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-3"}>
                    <MdOutlineFileUpload /><span>2</span>
                </div>

            </div>
        </div>
    );
};

export default Tweet;