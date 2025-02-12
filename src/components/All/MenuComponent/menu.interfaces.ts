export interface IMenuItem {
    path: string;
    label: string;
    requiresAuth?: boolean;
    disabled?: boolean;
    cb?: () => void
}

export interface IProps {
    children?: React.ReactNode;
    items: IMenuItem[];
    className?: string;
}
