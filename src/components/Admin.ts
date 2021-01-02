import { Component, Vue } from 'vue-property-decorator';
import WithRender from '../views/admin.html';

@WithRender
@Component
export default class Admin extends Vue {

    constructor()
    {
        super();
    }
}