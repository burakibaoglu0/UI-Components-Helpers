interface mainItems {
    title: string;
    route: string;
    iconName?: string;
    [key: string]: any;
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
    },
    {
        title: 'Slider',
        route: '/slider',
        iconName: 'gesture-swipe-horizontal'
    }
];