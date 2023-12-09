import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const query = `
    query($first: Int) {
      groups(first: $first) {
        id
        name
      }
    }
      `;

    try {
      const graphqlResponse = await fetch("https://api.sismo.io/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      console.log(JSON.stringify({ query }))
      console.log(graphqlResponse);

      const { data, errors } = await graphqlResponse.json();

      if (errors) {
        res.status(500).json({ errors });
      } else {
        res.status(200).json({ data });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
