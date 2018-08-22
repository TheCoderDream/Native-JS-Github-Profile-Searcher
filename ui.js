class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML =
            `<div class="card card-body mb-3">
               <div class="row">
                 <div class="col-md-3">
                   <img src="${user.avatar_url}" alt="" class="img-fluid mb">
                   <a href="${user.html_url}" class="btn btn-info mb-3 mt-3 btn-block" target="_blank">View Profile</a>
                </div>
                <div class="col-md-9">
                  <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                  <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                  <span class="badge badge-success">Followers: ${user.followers}</span>
                  <span class="badge badge-info">Following: ${user.following}</span>
                  <br><br>
                  <ul class="list-group">
                     <li class="list-group-item"><strong>Company:</strong> ${user.company ? user.company : 'unknown'}</li>
                     <li class="list-group-item"><strong>Website/Blog:</strong> ${user.blog ? user.blog : 'unknown'}</li>
                     <li class="list-group-item"><strong>Email:</strong> ${user.email ? user.email : 'unknown'}</li>
                     <li class="list-group-item"><strong>Location:</strong> ${user.location ? user.location : 'unknown'}</li>
                     <li class="list-group-item"><strong>Member since:</strong> ${user.created_at ? user.created_at : 'unknown'}</li
                  </ul>
                </div>
               </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
`;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showRepos(repos) {
        let output = '';

        const reposList = document.getElementById('repos');
        console.log(reposList, repos);

        repos.forEach((repo) => {
            output +=
                `
                <div class="card card-body mb-2">
                  <div class="row">
                    <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
                    <div class="col-md-6">
                      <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                      <span class="badge badge-secondary">Wathcers Gists: ${repo.watchers_count}</span>
                      <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                  </div>
                </div>
                
                `;
        });

        reposList.innerHTML = output;
        console.log(reposList);
    }
}