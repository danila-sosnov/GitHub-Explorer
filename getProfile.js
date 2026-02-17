async function getProfile(username)
{
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url);

    const data = await response.json();
    showProfile(data);
}