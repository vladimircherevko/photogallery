export const bootstrap = async () => {
  const resp = await fetch(
    "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
  );
  const data = await resp.json();

  if (Array.isArray(data)) return getInfo(data);
  throw new Error("Erroneous request");
};

const getInfo = data =>
  data.map(item => ({
    id: item.id,
    text: item.alt_description,
    name: item.user.name || item.user.first_name,
    "url-small": item.urls.thumb,
    "url-big": item.urls.regular
  }));
