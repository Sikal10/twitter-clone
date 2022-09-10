import React, {useEffect, useState} from 'react';
import {Tweet, Comment} from "../typings";
import TimeAgo from "react-timeago";
import { HiOutlineHeart} from "react-icons/hi";
import {RiChat1Line} from "react-icons/ri";
import {AiOutlineRetweet} from "react-icons/ai";
import {MdOutlineFileUpload} from "react-icons/md";
import {fetchComments} from "../utils";

interface Props {
    tweet: Tweet
}

const Tweet = ({tweet}: Props) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const reFetchComments = async () => {
        const comments: Comment[] = await fetchComments(tweet?._id);
        setComments(comments);
    }

    useEffect(() => {
        reFetchComments();
    }, []);

    return (
        <div className={"border-y dark:border-gray-800 border-gray-100 p-5"}>
            <div className={"flex gap-4"}>
                <img className={"w-12 h-12 object-cover rounded-full"} src={tweet?.profileImg} alt=""/>

                <div>
                    <div className={"flex items-center space-x-1"}>
                        <p className={"text-xl font-semibold dark:text-[#e7e9ea]"}>{tweet?.username}</p>

                        <p className={"hidden sm:inline text-gray-400 text-xs"}>@{tweet?.username?.replace(/\s+/g, "").toLowerCase()} · </p>

                        <TimeAgo date={tweet?._createdAt} className={"text-xs text-gray-500"}/>
                    </div>

                    <p className={"mt-2 mb-3 dark:text-[#e7e9ea]"}>{tweet?.text}</p>

                    {tweet?.image && <img className={"m-5 ml-0 mb-1 md:max-w-[400px] md:w-[400px] md:h-[350px] rounded-lg object-cover shadow-sm"} src={tweet.image} alt=""/>}
                </div>

            </div>

            <div className={"max-w-[425px] ml-16 mt-2 flex justify-between"}>
                <div className={"flex items-center cursor-pointer text-gray-400 gap-2"}>
                    <RiChat1Line />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-2"}>
                    <AiOutlineRetweet />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-2"}>
                    <HiOutlineHeart />
                    <span>2</span>
                </div>

                <div className={"flex items-center cursor-pointer text-gray-400 gap-2"}>
                    <MdOutlineFileUpload /><span>2</span>
                </div>
            </div>

            {comments?.length > 0 && (
                <div className={"space-y-3 ml-16 mt-6 border-t border-gray-100 p-5"}>
                    {comments.map((comment, index, arr) => <div className={"flex gap-2 relative"} key={comment._id}>
                        {index !== arr.length - 1 && <hr className={"absolute left-4 top-8 h-8 border-x border-twitter/30 "}/>}

                        <img src={comment.profileImg} className={"w-8 h-8 rounded-full"} alt=""/>

                        <div>
                            <div className={"flex items-center"}>
                                <h2>{comment.username}</h2>
                                <p className={"hidden sm:inline text-gray-400 text-xs"}>@{comment.username.replace(/\s+/g, "").toLowerCase()} · </p>
                                <TimeAgo date={comment._createdAt} className={"text-xs text-gray-500"}/>
                            </div>

                            <p>{comment.comment}</p>

                        </div>
                    </div>)}
                </div>
            )}

        </div>
    );
};

export default Tweet;