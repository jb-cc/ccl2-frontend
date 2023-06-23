// routes for everything that is related to the user


const routes = [    // you can't access anything in here if not logged in
    {
        path: '/profile',
        name: 'User Profile',
        component: () => import('../components/UserProfile.vue')
    },
    {
        // node.js: wenn hier eine DELETE request kommt, dann wird der user gelöscht
        // node.js: wenn hier eine PUT request kommt, dann wird der user geupdated
        path: '/settings',
        name: 'Edit User Profile',
        component: () => import('../components/EditUserProfile.vue')

    },
    {
        path: '/inventory',
        name: 'User Inventory',
        component: () => import('../components/UserInventory.vue')
    },
    {
        path: '/inventory/:item', // item is the userweaponid from the inventory db
        name: 'User Inventory Item',
        component: () => import('../components/UserInventoryItem.vue')
    },
    {
        path: '/inventory/:item/sell',
        name: 'Sell Item',
        component: () => import('../components/SellItem.vue')
    },
    {
        path: '/profile/deposit',
        name: 'Deposit',
        component: () => import('../components/Deposit.vue')
    },


]

export default routes