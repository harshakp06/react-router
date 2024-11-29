import React, { useEffect } from "react";
import {useLoaderData} from 'react-router'


function Github() {

    const data = useLoaderData()




//   const [data, setData] = React.useState([])

//   useEffect(() => {
//     fetch("https://api.github.com/users/harshakp06")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         setData(data)
        
//     });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers} <br />
      Number of Public Repos: {data.public_repos}
      <img src={data.avatar_url} width={300} alt="GitHub_profile_image" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/harshakp06");

    return response.json()
}


