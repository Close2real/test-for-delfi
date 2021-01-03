import { __decorate } from "tslib";
import { Vue, Component } from 'vue-property-decorator';
import News from '../domains/News';
import axios from 'axios';
let Core = class Core extends Vue {
    constructor() {
        super();
        this.newsList = [];
        this.showList = [];
        this.changingId = 0;
        this.changingTitle = "";
        this.filterList = [];
        this.newsFilter = 0;
        if (localStorage.getItem('newsList')) {
            JSON.parse(localStorage.getItem('newsList') || '').map((newsJson) => {
                this.newsList.push(new News(newsJson));
            });
        }
        if (localStorage.getItem('showList')) {
            this.showList = JSON.parse(localStorage.getItem('showList') || '');
        }
    }
    async onMount() {
        let newsData = [];
        if (!localStorage.getItem('newsList')) {
            await axios({
                method: 'GET',
                url: `https://cors-anywhere.herokuapp.com/https://www.delfi.lv/misc/task_2020/`,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                }
            }).then((response) => {
                newsData = response.data;
            });
            localStorage.setItem('newsList', JSON.stringify(newsData));
        }
        newsData.map((newsJson) => {
            this.newsList.push(new News(newsJson));
        });
        this.renewFilter();
    }
    showNews(id) {
        if (this.showList.includes(id))
            return true;
        else
            return false;
    }
    cancelChange() {
        this.changingId = 0;
        this.changingTitle = "";
    }
    changeNewsVisibilityById() {
        this.newsList.map((news) => {
            if (news.id == this.changingId) {
                if (!this.showList.includes(this.changingId)) {
                    this.showList.push(news.id);
                }
                else {
                    this.showList.forEach((value, index) => {
                        if (value == this.changingId)
                            this.showList.splice(index, 1);
                    });
                }
                localStorage.setItem('showList', JSON.stringify(this.showList));
                return;
            }
        });
        this.renewFilter();
    }
    saveNewsVisibilityId(id) {
        this.changingId = id;
        this.newsList.map((news) => {
            if (news.id == this.changingId) {
                this.changingTitle = news.title;
                return;
            }
        });
    }
    renewFilter() {
        this.filterList = [];
        this.newsList.map((news) => {
            if (!this.filterList.includes(news.channel_id) && this.showList.includes(news.id))
                this.filterList.push(news.channel_id);
        });
        if (!this.filterList.includes(this.newsFilter))
            this.newsFilter = 0;
    }
};
Core = __decorate([
    Component
], Core);
export default Core;
//# sourceMappingURL=Core.js.map