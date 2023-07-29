import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_API_KEY,
  environment: "master",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "projects",
      });
      const data = items.map(({ fields, sys }) => {
        const { title, url, image } = fields;
        const imageUrl = image?.fields?.file?.url;
        const { id } = sys;
        return { id, title, url, imageUrl };
      });
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
