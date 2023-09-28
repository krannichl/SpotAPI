async function main(){
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAABv6FX-wyL_provhKfzm_wntRmDItHiggqsXmmDUYnQjDcE2agRQfqr7MMW7J1aTrQ4005bYZuZDblRauKb582qbe89WUlfw8yiOX3-1lTW-Kz_OAsU7GYK3tH1Y0XFLGTVQ2xzR7iZWfzcHfG1rkHrtHDLuLEtEqymeoBf-29C3Nsc76IB7ohFnyUA0T4X8PEu1OboWEHaRUhhuxDILTCh7SnlRnEMZaRcjY2hnH10exYRg_PI1dQYZSFRY3gBWg3o55';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

document.getElementById("result").innerHTML = topTracks?.map(
  ({name, artists}) =>
    `${name} by ${artists.map(artist => artist.name).join(', ')}`
);

//document.getElementById("result").innerHTML = getTopTracks();
  }
  //main();

