async function main(){
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDUiKLD8qc8rrWYZCyW_Pir1lL-zphmzdSjMQUD9Wq2AjvTLfHQErrpRtVGhJt2h6k6OlL77xmzxqx23U8kF_hqEbJQq1wai9ugiK1lect7Zq3WU9jWLqSUYRjm5bpMW53Ddk96pvsZA7azZ9ZvWRkZym3ffsIG67FgKJhrp02yyXhUh4pjSQEuYA8HjidNdO6ZPEMqAZuZcW5cJFUiIaZoJHkUQN1RqSftHKmc6qHPixcTLnb3eN1OGNFSoVIy-mgzkFCW';
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

const topTracksIds = [
  '1LYtC8BAMgukfpThpJtTG7','00c6JYguKlfq5yOlLoITlH','09ipANiD7xXEelBExZOmtE','006PqR1oiUymGz6BRhFJ3g','6rGbxWWxR9kRDOJsh9mEPs'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
  }
  main();