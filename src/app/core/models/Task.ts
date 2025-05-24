export interface TaskList{
    id?:number;
    task:string;
    descriptionTask:string;
    active:boolean;
    creationDate: Date;
    modificationDate:Date;
}