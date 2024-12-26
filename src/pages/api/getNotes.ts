/** eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next'

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    try {
        const response = await (await fetch("https://service.pace-unv.cloud/api/notes")).json();
        // console.log("response => ", response);
        res.status(200).json({ ...response });
      } catch (err) {
        console.log("error => ", err);
        res.status(500).json({ "error" : err });
      }
}

export async function getNotes() {
    try {
        const res = await fetch("https://service.pace-unv.cloud/api/notes");
        const notes = await res.json();
        return notes;
    } catch (err) {
        console.error(err)
    }
}