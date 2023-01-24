// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SIUX_STUDIO_API_KEY, SIUX_STUDIO_BRAND_ID } from "../../config/env";

export default async (req, res) => {
  try {
    return fetch(
      `https://app.siux.studio/api/v1/brands/${SIUX_STUDIO_BRAND_ID}/definitions?apikey=${SIUX_STUDIO_API_KEY}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        return res.status(200).json(data);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};
