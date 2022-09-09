import {HiOutlineRefresh} from "react-icons/hi";
import TweetBox from "./TweetBox";
import {Tweet} from "../typings";
import TweetComponent from "../components/Tweet";

interface Props {
    tweets: Tweet[]
}

const Feed = ({tweets}: Props) => {
    return (
        <div className={"col-span-7 lg:col-span-5 border-x "}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"p-5 pb-0 text-xl font-bold"}>Home</h1>

                <HiOutlineRefresh className={"h-8 w-8 mt-5 mr-5  cursor-pointer text-twitter transition-all duration-500 ease-out active:scale-125 hover:rotate-180"}/>
            </div>

            <div>
                <TweetBox />
            </div>

            <div>
                {tweets.map((tweet) => <TweetComponent key={tweet._id} tweet={tweet} />)}
            </div>
        </div>
    );
};

export default Feed;