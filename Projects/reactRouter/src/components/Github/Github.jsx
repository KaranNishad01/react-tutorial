import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/KaranNishad01")
      .then((Response) => Response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4 text-center">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git pictures" width={150} />
      </div>
    </>
  );
}
