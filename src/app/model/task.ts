export interface Task {

  _id?: {$oid: string};
  taskName: string;
  createdDate: string;
  doneDate?: string;
  isDone: boolean;

}
