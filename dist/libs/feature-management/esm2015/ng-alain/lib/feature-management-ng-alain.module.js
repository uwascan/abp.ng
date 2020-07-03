import { __decorate } from "tslib";
import { FeatureManagementWrapModule } from '@fs/feature-management/wrap';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';
let FeatureManagementNgAlainModule = class FeatureManagementNgAlainModule {
};
FeatureManagementNgAlainModule = __decorate([
    NgModule({
        declarations: [FeatureManagementComponent],
        imports: [
            CoreModule,
            NgAlainBasicModule,
            FeatureManagementWrapModule
        ],
        exports: [FeatureManagementComponent]
    })
], FeatureManagementNgAlainModule);
export { FeatureManagementNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBVzFHLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0NBQUksQ0FBQTtBQUFsQyw4QkFBOEI7SUFUMUMsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDMUMsT0FBTyxFQUFFO1lBQ0wsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQiwyQkFBMkI7U0FDOUI7UUFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN4QyxDQUFDO0dBQ1csOEJBQThCLENBQUk7U0FBbEMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRXcmFwTW9kdWxlIH0gZnJvbSAnQGZzL2ZlYXR1cmUtbWFuYWdlbWVudC93cmFwJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmUtbWFuYWdlbWVudC9mZWF0dXJlLW1hbmFnZW1lbnQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICAgICAgRmVhdHVyZU1hbmFnZW1lbnRXcmFwTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW0ZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHsgfVxyXG4iXX0=