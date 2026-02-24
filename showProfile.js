function showProfile(user)
{

    const card = document.getElementById('profile');

    card.classList.remove('hidden');
    card.classList.remove('show');

    setTimeout( function() {
        card.classList.add('show');
    }, 10);
   
    document.getElementById('avatar').src = user.avatar_url;
    document.getElementById('name').textContent = user.name;
    document.getElementById('login').textContent = '@' + user.login;
    document.getElementById('bio').textContent = user.bio;
    document.getElementById('repos').textContent = `Репозитории: ${user.public_repos}`;
    document.getElementById('followers').textContent = `Подписчики: ${user.followers}`;
    document.getElementById('following').textContent = `Подписки: ${user.following}`;
    document.getElementById('link').href = user.html_url;
}