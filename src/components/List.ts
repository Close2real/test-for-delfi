import { Component, Vue } from 'vue-property-decorator';
import WithRender from '../views/list.html';
import News from '../domains/News';

@WithRender
@Component
export default class Admin extends Vue {
    abc: number;
    newsList: Array<News> = [];

    constructor()
    {
        super();
        this.abc = 123;
    }

    public isOk()
    {
        return 'pew pew';
    }
}