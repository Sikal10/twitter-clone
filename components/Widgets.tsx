import React from 'react';
import {MdSearch} from "react-icons/md";
import {TwitterTimelineEmbed} from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className={"px-2 mt-2 col-span-2 hidden lg:inline"}>
            <div className={"flex items-center gap-2 bg-gray-100 p-3 rounded-full mt-2 "}>
                <MdSearch className={"text-3xl text-gray-400"} />
                <input type="text" className={"flex-1 outline-0 bg-transparent"} placeholder={"Search Twitter"}/>
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sikal_sikal"
                options={{height: 1000}}
            />

        </div>
    );
};

export default Widgets;