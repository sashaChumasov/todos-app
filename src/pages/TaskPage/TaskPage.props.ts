export interface ITask {
    id: number;
    title: string;
    isDone: boolean
}
export type ITaskProps = {
    tasks: ITask[]
    removeTask: (taskId: number) => void
}