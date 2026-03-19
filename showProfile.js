function showProfile(user)
{
    console.log(user);

    const reposBtn = document.getElementById('repos-btn');
    reposBtn.style.cursor = 'pointer';

    reposBtn.addEventListener('click',
    function()
    {
        window.location.href = `repos.html?username=${user.login}`;
    })

    document.getElementById('profile').classList.remove('hidden');

    requestAnimationFrame(function() {
        document.getElementById('profile').classList.add('show');
    })
    
    document.getElementById('avatar').src = user.avatar_url;
    document.getElementById('name').textContent = user.name || 'No name';
    document.getElementById('login').textContent = '@' + user.login;

    document.getElementById('followers').textContent = user.followers;
    document.getElementById('following').textContent = user.following;
    document.getElementById('repos').textContent = user.public_repos;

    document.getElementById('location').textContent = user.location || 'Not specified';
    document.getElementById('email').textContent = user.email || 'hidden';

    const year = new Date(user.created_at).getFullYear();
    document.getElementById('since').textContent = year;


    document.getElementById('link').href = user.html_url;
}