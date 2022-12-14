// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {TweetBody} from "../../typings";
import axios from "axios";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const data: TweetBody = JSON.parse(req.body);

    const mutations = {
        mutations: [
            {
                create: {
                    _type: "tweet",
                    text: data.text,
                    username: data.username,
                    blockTweet: false,
                    profileImg: data.profileImg,
                    image: data.image
                }
            }
        ]
    }

    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
        },
    }
    const response = await axios.post(apiEndpoint, JSON.stringify(mutations) ,config);
    const responseData = response.data;

    res.status(200).json(responseData);
}
