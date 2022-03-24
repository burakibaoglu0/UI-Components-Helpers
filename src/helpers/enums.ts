interface mainItems {
    title: string;
    route: string;
    iconName: string;
}


export const exampleList: Array<mainItems> = [
    {
        title: 'Buttons',
        route: '/buttons',
        iconName: 'gesture-tap-button'
    },
    {
        title: 'Icons',
        route: '/icons',
        iconName: 'hammer-screwdriver'
    },
    {
        title: 'Alerts',
        route: '/alerts',
        iconName: 'alert-circle'
    }
];