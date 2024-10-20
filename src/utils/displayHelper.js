function displayActivity(events) {
    if (!events.length) {
        console.log('No recent activity found.');
        return;
    }

    events.forEach((event) => {
        switch (event.type) {
            case 'PushEvent':
                const repoName = event.repo.name;
                const commitCount = event.payload.commits.length;
                console.log(`Pushed ${commitCount} commits to ${repoName}`);
                break;

            case 'IssuesEvent':
                const issueAction = event.payload.action;
                const issueRepo = event.repo.name;
                console.log(`${issueAction === 'opened' ? 'opened':'closed'} an issue in ${issueRepo}`);
                break;

            case 'WatchEvent':
                const starredRepo = event.repo.name;
                console.log(`Starred ${starredRepo}`);
                break;
            
            case 'ForkEvent':
                console.log(`Forked the repository ${repoName}`);
                break;

            case 'CreateEvent':
                const createRepoName = event.repo.name;
                const createRefType = event.payload.ref_type;
                console.log(`Created a new ${createRefType} in ${createRepoName}`);
                break;

            case 'DeleteEvent':
                const deleteRepoName = event.repo.name;
                const deleteRefType = event.payload.ref_type;
                console.log(`Deleted a ${deleteRefType} in ${deleteRepoName}`);
                break;

            case 'PullRequestEvent':
                const prAction = event.payload.action;
                const prRepoName = event.repo.name;
                console.log(`Pull request ${prAction} in ${prRepoName}`);
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }
    });
}

export default displayActivity;