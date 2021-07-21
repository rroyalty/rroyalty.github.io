import snoowrap from 'snoowrap'

interface IVars {
    userAgent: string,
    clientId: string,
    clientSecret: string,
    refreshToken: string,
}

const recentPost = async () => {
    try {

        const vars: IVars = {
            userAgent: "zyoBgENmBvwvCTVf1gvt",
            clientId: "yaQ8YiRrDvvAC5O0876sIQ",
            clientSecret: "JV3HiFXaZd1H57pzqPorVj12bx3LVw",
            refreshToken: "1042716567829-fxD89fv1hUw9GxbPIiUl0RAK5Qul1g",
        }

        const snoo = await new snoowrap(vars);

        const subreddit = snoo.getSubreddit('realEstate');
        const topPosts = subreddit.getTop({ time: 'week', limit: 3 });

        return topPosts
    }
    catch { console.log('error') }
}

export default recentPost