const githubApiService = new GithubAPI();
const ui = new UI();
let toasterIsActive = true;

const searchUser = document.getElementById('searchUser');

document.addEventListener('DOMContentLoaded', () => {
   searchUser.value = '';
});

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText) {

        githubApiService.getUser(userText)
            .then(data => {
                if (data.profile.message && toasterIsActive) {
                    toasterIsActive = false;
                    ui.clearProfile();
                       Toaster('#toaster', 'User Not Found', 'danger', 3)
                       .then((isTrue) => {
                           toasterIsActive = isTrue;
                       });
                } else if(!data.profile.message) {
                    console.log(data);
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        ui.clearProfile();


    }
});