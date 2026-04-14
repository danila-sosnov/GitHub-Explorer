const params = new URLSearchParams(window.location.search);
const username = params.get('username');
if(username)
{
    loadRepos(username);
}

const languageColors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#2b7489'

};
async function loadRepos(username)
{

    const response = await fetch(`https://api.github.com/users/${username}/repos`);  
    const repos = await response.json();

    const container = document.getElementById('repos-container');
    container.innerHTML = '';

    repos.slice(0,12).forEach((repo,index) => {
 
        const date = new Date(repo.updated_at).toLocaleDateString();
        const el = document.createElement('div');   
        el.className = 'repo';
        const langColor = languageColors[repo.language] || '#8b949e';
        el.innerHTML = `
        <a href="${repo.html_url}" target ="_blank">
        ${repo.name}
        </a>
        <div class="repo-time"> Updated: ${date} </div>
        <div class="repo-info">
        <div>${repo.stargazers_count}</div>
        <div>${repo.forks_count}</div>

        <div class="language">
        <span class="lang-dot" style="background:${langColor}"></span>
                ${repo.language || 'Unknown'}
            </div>
        </div>`;
        container.appendChild(el);
        setTimeout(() => {
            el.classList.add('show');
        }, index * 100);
    })
}
