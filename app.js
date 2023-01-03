const playButton = document.querySelector("button");
playButton.addEventListener("click", async function () {
  const config = { headers: {'Authorization': } };
  const res = await axios.get(
    "https://api.spotify.com/v1/users/user_id/playlists"
  );
});
