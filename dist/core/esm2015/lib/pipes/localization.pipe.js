import { __decorate, __metadata } from "tslib";
import { Injectable, Pipe } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
let LocalizationPipe = class LocalizationPipe {
    constructor(store) {
        this.store = store;
    }
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(value, ...interpolateParams.reduce((acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val]), [])));
    }
};
LocalizationPipe = __decorate([
    Injectable(),
    Pipe({
        name: 'abpLocalization',
    }),
    __metadata("design:paramtypes", [Store])
], LocalizationPipe);
export { LocalizationPipe };
let MockLocalizationPipe = class MockLocalizationPipe {
    transform(value = '', ..._) {
        return typeof value === 'string' ? value : value.defaultValue;
    }
};
MockLocalizationPipe = __decorate([
    Injectable(),
    Pipe({
        name: 'abpLocalization',
    })
], MockLocalizationPipe);
export { MockLocalizationPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFNeEMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRXBDLFNBQVMsQ0FDUCxRQUFpRCxFQUFFLEVBQ25ELEdBQUcsaUJBQTJCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQzlCLFdBQVcsQ0FBQyxlQUFlLENBQ3pCLEtBQUssRUFDTCxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNyRSxFQUFFLENBQ0gsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWpCWSxnQkFBZ0I7SUFKNUIsVUFBVSxFQUFFO0lBQ1osSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLGlCQUFpQjtLQUN4QixDQUFDO3FDQUUyQixLQUFLO0dBRHJCLGdCQUFnQixDQWlCNUI7U0FqQlksZ0JBQWdCO0FBdUI3QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixTQUFTLENBQUMsUUFBaUQsRUFBRSxFQUFFLEdBQUcsQ0FBVztRQUMzRSxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ2hFLENBQUM7Q0FDRixDQUFBO0FBSlksb0JBQW9CO0lBSmhDLFVBQVUsRUFBRTtJQUNaLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxpQkFBaUI7S0FDeEIsQ0FBQztHQUNXLG9CQUFvQixDQUloQztTQUpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnBMb2NhbGl6YXRpb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxpemF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0ID0gJycsXHJcbiAgICAuLi5pbnRlcnBvbGF0ZVBhcmFtczogc3RyaW5nW11cclxuICApOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoXHJcbiAgICAgIENvbmZpZ1N0YXRlLmdldExvY2FsaXphdGlvbihcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICAuLi5pbnRlcnBvbGF0ZVBhcmFtcy5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCB2YWwpID0+IChBcnJheS5pc0FycmF5KHZhbCkgPyBbLi4uYWNjLCAuLi52YWxdIDogWy4uLmFjYywgdmFsXSksXHJcbiAgICAgICAgICBbXSxcclxuICAgICAgICApLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnBMb2NhbGl6YXRpb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9ja0xvY2FsaXphdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCA9ICcnLCAuLi5fOiBzdHJpbmdbXSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcbn1cclxuIl19