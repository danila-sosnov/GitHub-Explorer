const btn = document.getElementById('search-button');
const profile = document.getElementById('profile');

btn.addEventListener('click',
function()
{
    const username = document.getElementById('input').value;

    if(username === "")
    {
        alert('Enter your username!');
        return;
    }
    getProfile(username);
})