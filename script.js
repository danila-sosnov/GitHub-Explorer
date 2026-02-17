const btn = document.getElementById('search-button');
const profile = document.getElementById('profile');

btn.addEventListener('click',
function()
{
    const username = document.getElementById('input').value;
console.log(username);
    if(username === "")
    {
        alert('Enter your username!');
        return;
    }
    getProfile(username);
})