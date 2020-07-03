import { __decorate } from "tslib";
import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
let ManageProfileComponent = class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
    }
};
ManageProfileComponent = __decorate([
    Component({
        selector: 'ng-alain-manage-profile',
        template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\"></div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"menu\">\r\n    <ul nz-menu nzMode=\"inline\">\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 0\" (click)=\"selectedTab = 0\">\r\n        {{\r\n            'AbpUi::ChangePassword' | abpLocalization\r\n        }}\r\n      </li>\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 1\" (click)=\"selectedTab = 1\">\r\n        {{\r\n            'AbpAccount::PersonalSettings' | abpLocalization\r\n        }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ 'AbpAccount::ChangePassword' | abpLocalization }}</div>\r\n    <ng-alain-change-password-form *ngIf=\"selectedTab === 0\"></ng-alain-change-password-form>\r\n    <ng-alain-personal-settings-form *ngIf=\"selectedTab === 1\"></ng-alain-personal-settings-form>\r\n  </div>\r\n\r\n</div>\r\n",
        animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
        styles: [":host{display:block;padding-top:24px}.main{background-color:#fff;display:flex;overflow:auto;padding-bottom:16px;padding-top:16px;width:100%}.menu{border-right:1px solid #f0f0f0;width:224px}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{border:none;width:100%}.main .content{padding:40px}}"]
    })
], ManageProfileComponent);
export { ManageProfileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBQW5DO1FBQ0ksZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUFBLENBQUE7QUFGWSxzQkFBc0I7SUFObEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyx1Z0NBQThDO1FBRTlDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7S0FDaEYsQ0FBQztHQUNXLHNCQUFzQixDQUVsQztTQUZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhZGVJbiB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWFsYWluLW1hbmFnZS1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQubGVzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhZGVJbicsIFt0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oZmFkZUluKSldKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IHtcclxuICAgIHNlbGVjdGVkVGFiID0gMDtcclxufVxyXG4iXX0=