export default class News
{
    public id: number = 0;
    public channel_id: number = 0;
    public title: string = "";
    public url: string = "";

    public constructor(initValues: Partial<News>)
    {
        (<any>Object).assign(this, initValues);
    }
}