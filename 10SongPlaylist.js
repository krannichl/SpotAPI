
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

const tracksUri = [
  'spotify:track:1LYtC8BAMgukfpThpJtTG7','spotify:track:5dAw4Hn0q5CKtG9Yi16I0z','spotify:track:00c6JYguKlfq5yOlLoITlH','spotify:track:1jbwxyPFP0IgNj1RegThRH','spotify:track:09ipANiD7xXEelBExZOmtE','spotify:track:0jtIWMQYarkpNedynDYmim','spotify:track:006PqR1oiUymGz6BRhFJ3g','spotify:track:3CFfSQD1HTpn2eeGu9xY7J','spotify:track:6rGbxWWxR9kRDOJsh9mEPs','spotify:track:5yfxEJKz8d8ewT1ZDLaNo9'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);

}
main();
