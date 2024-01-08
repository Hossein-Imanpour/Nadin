/* eslint-disable prettier/prettier */
export class CreateToDoDto {
    id: number;
    name: string;
    task: 'bug fixing' | 'monitoring the server';
}
