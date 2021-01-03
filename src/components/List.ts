import {Component} from 'vue-property-decorator';
import WithRender from '../views/list.html';
import News from '../domains/News';
import Core from './Core';
import '../scss/list.css';

@WithRender
@Component
export default class Admin extends Core
{
    async mounted()
    {
        this.onMount();
    }

    public newsShownInList(id: number)
    {
        if (this.showList.includes(id))
        {
            if (this.newsFilter == 0)
                return true;
            else
            {
                let found = false;
                this.newsList.map((news: News) => 
                {
                    if (news.channel_id == this.newsFilter && news.id == id)
                    {
                        found = true;
                        return;
                    }
                });
                return found;
            }
        }
        else
            return false;
    }
}