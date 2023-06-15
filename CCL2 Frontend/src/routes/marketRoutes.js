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
    {
        path: '/listings/item/:item/buy',   // you can't do this when not logged in
        name: 'Buy skin',
        component: () => import('../components/Buy.vue')
    },
]

export default routes