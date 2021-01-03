import { __decorate } from "tslib";
import { Component } from 'vue-property-decorator';
import WithRender from '../views/admin.html';
import Core from './Core';
let Admin = class Admin extends Core {
    async mounted() {
        this.onMount();
    }
};
Admin = __decorate([
    WithRender,
    Component
], Admin);
export default Admin;
//# sourceMappingURL=Admin.js.map