import {Injectable} from '@angular/core';

@Injectable()

export class TodoList
{
    wlist=[
        {work:'Work Home',date:'26-3-2019'}
    ]
    getlist()
    {
        return this.wlist
    }
    setList(o)
    {
        this.wlist.push(o);
    }
}