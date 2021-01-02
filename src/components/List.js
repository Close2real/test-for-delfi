import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import WithRender from '../views/list.html';
let Admin = class Admin extends Vue {
    constructor() {
        super();
        this.newsList = [];
        this.abc = 123;
    }
    isOk() {
        return 'pew pew';
    }
};
Admin = __decorate([
    WithRender,
    Component
], Admin);
export default Admin;
//# sourceMappingURL=List.js.map