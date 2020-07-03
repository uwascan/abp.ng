import { __decorate } from "tslib";
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';
import { NgxsModule } from '@ngxs/store';
import { FeatureManagementState } from './states/feature-management.state';
let FeatureManagementModule = class FeatureManagementModule {
};
FeatureManagementModule = __decorate([
    NgModule({
        declarations: [FeatureManagementComponent],
        imports: [CoreModule, ThemeSharedModule, NgxsModule.forFeature([FeatureManagementState])],
        exports: [FeatureManagementComponent],
    })
], FeatureManagementModule);
export { FeatureManagementModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2ZlYXR1cmUtbWFuYWdlbWVudC9zcmMvbGliL2ZlYXR1cmUtbWFuYWdlbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTzNFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUcsQ0FBQTtBQUExQix1QkFBdUI7SUFMbkMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDMUMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDekYsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDdEMsQ0FBQztHQUNXLHVCQUF1QixDQUFHO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmUtbWFuYWdlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudFN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLCBUaGVtZVNoYXJlZE1vZHVsZSwgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtGZWF0dXJlTWFuYWdlbWVudFN0YXRlXSldLFxyXG4gIGV4cG9ydHM6IFtGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudE1vZHVsZSB7fVxyXG4iXX0=