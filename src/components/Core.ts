import {Vue, Component} from 'vue-property-decorator';
import News from '../domains/News';
import axios from 'axios';

@Component
export default class Core extends Vue 
{
    public newsList: Array<News> = [];
    public showList: Array<number> = [];
    public changingId: number = 0;
    public changingTitle: string = "";
    public filterList: Array<number> = [];
    public newsFilter: number = 0;

    constructor()
    {
        super();
        if (localStorage.getItem('newsList'))
        {
            JSON.parse(localStorage.getItem('newsList') || '').map((newsJson: News) => 
            {
                this.newsList.push(new News(newsJson));
            });
        }
        if (localStorage.getItem('showList'))
        {
            this.showList = JSON.parse(localStorage.getItem('showList') || '');
        }
    }

    public async onMount()
    {
        let newsData: any = [];
        
        if (!localStorage.getItem('newsList'))
        {
            await axios({
                method: 'GET',
                url: `https://cors-anywhere.herokuapp.com/https://www.delfi.lv/misc/task_2020/`,
                headers: {
                   'Access-Control-Allow-Origin': '*',
                   'Content-type': 'application/json',
                }
            }).then((response) => 
            {
                newsData = response.data;
            });
            localStorage.setItem('newsList', JSON.stringify(newsData));
        }
        newsData.map((newsJson: News) => 
        {
            this.newsList.push(new News(newsJson));
        });
        this.renewFilter();
    }

    public showNews(id: number)
    {
        if (this.showList.includes(id))
            return true;
        else
            return false;
    }

    public cancelChange()
    {
        this.changingId = 0;
        this.changingTitle = "";
    }

    public changeNewsVisibilityById()
    {
        this.newsList.map((news: News) => 
        {
            if (news.id == this.changingId)
            {
                if (!this.showList.includes(this.changingId))
                {
                    this.showList.push(news.id);
                }
                else
                {
                    this.showList.forEach((value,index)=>
                    {
                        if(value == this.changingId) 
                            this.showList.splice(index,1);
                    });
                }
                localStorage.setItem('showList', JSON.stringify(this.showList));
                return;
            }
        });
        this.renewFilter();
    }

    public saveNewsVisibilityId(id: number)
    {
        this.changingId = id;
        this.newsList.map((news: News) => 
        {
            if (news.id == this.changingId)
            {
                this.changingTitle = news.title;
                return;
            }
        });
    }

    public renewFilter()
    {
        this.filterList = [];
        this.newsList.map((news: News) => {
            if (!this.filterList.includes(news.channel_id) && this.showList.includes(news.id))
                this.filterList.push(news.channel_id);
        });
        if (!this.filterList.includes(this.newsFilter))
            this.newsFilter = 0;
    }
}