const params = new URLSearchParams(window.location.search);
const username = params.get('username');
if(username)
{
    loadRepos(username);
}

async function loadRepos(username)
{

    const response = await fetch(`https://api.github.com/users/${username}/repos`);  
    const repos = await response.json();

    const container = document.getElementById('repos-container');
    container.innerHTML = '';

    repos.slice(0,12).forEach((repo,index) => {
 
        const date = new Date(repo.updated_at).toLocaleDateString();
        const el = document.createElement('div');   
        container.appendChild(el);
        setTimeout(() => {
            el.classList.add('show');
        }, index * 100);
    })
}
