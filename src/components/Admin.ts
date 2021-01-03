import {Component} from 'vue-property-decorator';
import WithRender from '../views/admin.html';
import News from '../domains/News';
import Core from './Core';

@WithRender
@Component
export default class Admin extends Core
{
    async mounted()
    {
        this.onMount();
    }
}