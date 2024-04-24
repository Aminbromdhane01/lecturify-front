interface SelectProps {

    items?: string[]
    complexItems?: AuthorOption[]
    label: string;
    register?: any,
    err?: string
}
interface AuthorOption {
    value: string;
    label: string;
}