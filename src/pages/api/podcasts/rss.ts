// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";
import { podcastFeedUrl } from "@src/config";

const parser = new Parser();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const feed = await parser.parseURL(podcastFeedUrl);
  res.status(200).json(feed);
};
export default handler;
