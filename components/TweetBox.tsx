import {TbCalendarStats} from "react-icons/tb";
import {MdOutlineInsertPhoto, MdOutlineLocationOn} from "react-icons/md";
import {HiOutlineEmojiHappy} from "react-icons/hi";
import {BiPoll} from "react-icons/bi";
import {useState} from "react";

const TweetBox = () => {

    const [tweet, setTweet] = useState<string>("");

    return (
        <div className={"flex space-x-2 p-5"}>
            <img className={"mt-4 h-14 w-14 object-cover rounded-full"} src="https://links.papareact.com/gll" alt=""/>

            <div className={"flex flex-1 items-center pl-2"}>
                <form className={"flex flex-col flex-1"} action="">
                    <input value={tweet} onChange={e => setTweet(e.target.value)} type="text" className={"h-24 w-full text-xl outline-0 placeholder:text-xl"} placeholder={"What's happening?"}/>

                    <div className={"flex items-center"}>
                        <div className={"flex flex-1 gap-2 text-twitter"}>
                            <MdOutlineInsertPhoto className={"text-2xl cursor-pointer transition-transform duration-150 ease-out hover:scale-150"} />
                            <BiPoll className={"text-2xl"} />
                            <HiOutlineEmojiHappy className={"text-2xl"} />
                            <TbCalendarStats className={"text-2xl"} />
                            <MdOutlineLocationOn className={"text-2xl"} />
                        </div>

                        <button disabled={!tweet} className={"bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40 disabled:cursor-not-allowed"}>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TweetBox;