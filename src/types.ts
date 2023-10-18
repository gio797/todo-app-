export interface TaskInterface {
    name: string;
    done: boolean;
    onToggle?: (index: number) => void
    index?: number
}