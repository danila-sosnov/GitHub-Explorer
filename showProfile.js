function showProfile(user)
{
    console.log(user);
    document.getElementById('profile').classList.remove('hidden');

    document.getElementById('avatar').src = user.avatar_url;
    document.getElementById('name').textContent = user.name;
    document.getElementById('login').textContent = '@' + user.login;
    document.getElementById('bio').textContent = user.bio;
    document.getElementById('repos').textContent = `Репозитории: ${user.public_repos}`;
    document.getElementById('followers').textContent = `Подписчики: ${user.followers}`;
    document.getElementById('following').textContent = `Подписки: ${user.following}`;
    document.getElementById('link').href = user.html_url;
}