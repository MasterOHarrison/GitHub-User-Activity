import getUserActivity from "./services/apiService.js";
import displayActivity from "./utils/displayHelper.js"

(async () => {
    const args = process.argv.slice(2);
    const userName = args[0];
    console.log('userName', userName)

    try {
        const userActivity = await getUserActivity(userName);
        displayActivity(userActivity);
    } catch (error){
        console.error('Error fetching user activity:', error);
    }
})();

