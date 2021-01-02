import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import WithRender from '../views/admin.html';
let Admin = class Admin extends Vue {
    constructor() {
        super();
    }
};
Admin = __decorate([
    WithRender,
    Component
], Admin);
export default Admin;
//# sourceMappingURL=Admin.js.map