class GithubAPI {
    constructor() {
        this.client_id = '58106d38d809be3352a6';
        this.client_secret = 'a3aa3234b294df626339b83d95eb607a918d1e94';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(username) {
        const profileResponse =
            await fetch(
                `https://api.github.com/users/${username}
                ?client_id=${this.client_id}
                &client_secret=${this.client_secret}`);

        const repoResponse =
            await fetch(
                `https://api.github.com/users/${username}
                /repos?per_page=${this.repos_count}
                &client_id=${this.client_id}
                &sort=${this.repos_sort}
                &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await  repoResponse.json();

        return {
            profile,
            repos
        }

    }
}