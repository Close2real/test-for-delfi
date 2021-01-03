import { __decorate } from "tslib";
import { Component } from 'vue-property-decorator';
import WithRender from '../views/list.html';
import Core from './Core';
import '../scss/list.css';
let Admin = class Admin extends Core {
    async mounted() {
        this.onMount();
    }
    newsShownInList(id) {
        if (this.showList.includes(id)) {
            if (this.newsFilter == 0)
                return true;
            else {
                let found = false;
                this.newsList.map((news) => {
                    if (news.channel_id == this.newsFilter && news.id == id) {
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
};
Admin = __decorate([
    WithRender,
    Component
], Admin);
export default Admin;
//# sourceMappingURL=List.js.map