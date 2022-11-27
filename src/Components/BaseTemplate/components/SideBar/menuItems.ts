export const menuItems = [
    {
        title: "album",
        link: "/album",
        icon: "/assets/img/icons/album-icon.svg",
        isAuthenticatedRoute: false,
    },
    {
        title: "store",
        link: "/marketplace",
        icon: "/assets/img/icons/market-icon.svg",
        isAuthenticatedRoute: false,

    },
    {
        title: "prizes",
        link: "/rewards",
        icon: "/assets/img/icons/gifts-icon.svg",
        isAuthenticatedRoute: false,

    },
    {
        title: "events",
        link: "/events",
        icon: "/assets/img/icons/events-icon.svg",
        isAuthenticatedRoute: false,
        blocked: true
    },
    {
        title: "chalenges",
        link: "/challenges",
        icon: "/assets/img/icons/challenge-icon.svg",
        isAuthenticatedRoute: false,
        blocked: true
    },
    {
        title: "profile",
        link: "/profile",
        icon: "/assets/img/icons/my-data-icon.svg",
        isAuthenticatedRoute: true,
    },
]
