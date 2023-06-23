// routes for the market listings and buying logic

const routes = [
    {
        path: '/listings',
        name: 'All Listings',
        component: () => import('../components/Listings.vue')
    },
    {
        path: '/listings/team/:team', // when an item gets selected, you get rerouted to the /listings/item/:item route
        name: 'Listings by Team',
        component: () => import('../components/Listings.vue')
    },
    {
        path: '/listings/item/:item', // item here is the userWeaponID, to return a specific unique listing item
        name: 'Listing',
        component: () => import('../components/Listing.vue')    // shows a listing with all the info, and link to buy
    },
]

export default routes