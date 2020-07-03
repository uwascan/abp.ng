import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { generateHash } from '../utils';
import * as i0 from "@angular/core";
let DomInsertionService = class DomInsertionService {
    constructor() {
        this.inserted = new Set();
    }
    insertContent(contentStrategy) {
        const hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        const element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    }
    removeContent(element) {
        const hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    }
    has(content) {
        const hash = generateHash(content);
        return this.inserted.has(hash);
    }
};
DomInsertionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
DomInsertionService = __decorate([
    Injectable({ providedIn: 'root' })
], DomInsertionService);
export { DomInsertionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWluc2VydGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2RvbS1pbnNlcnRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUd4QyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUFoQztRQUNtQixhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztLQTJCL0M7SUF6QkMsYUFBYSxDQUNYLGVBQW1DO1FBRW5DLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXBDLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQTZDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEdBQUcsQ0FBQyxPQUFlO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRixDQUFBOztBQTVCWSxtQkFBbUI7SUFEL0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLG1CQUFtQixDQTRCL0I7U0E1QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZW50U3RyYXRlZ3kgfSBmcm9tICcuLi9zdHJhdGVnaWVzL2NvbnRlbnQuc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUhhc2ggfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRG9tSW5zZXJ0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbnNlcnRlZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xyXG5cclxuICBpbnNlcnRDb250ZW50PFQgZXh0ZW5kcyBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxTdHlsZUVsZW1lbnQ+KFxyXG4gICAgY29udGVudFN0cmF0ZWd5OiBDb250ZW50U3RyYXRlZ3k8VD4sXHJcbiAgKTogVCB7XHJcbiAgICBjb25zdCBoYXNoID0gZ2VuZXJhdGVIYXNoKGNvbnRlbnRTdHJhdGVneS5jb250ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnNlcnRlZC5oYXMoaGFzaCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gY29udGVudFN0cmF0ZWd5Lmluc2VydEVsZW1lbnQoKTtcclxuICAgIHRoaXMuaW5zZXJ0ZWQuYWRkKGhhc2gpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29udGVudChlbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxTdHlsZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGhhc2ggPSBnZW5lcmF0ZUhhc2goZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICB0aGlzLmluc2VydGVkLmRlbGV0ZShoYXNoKTtcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYXMoY29udGVudDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBoYXNoID0gZ2VuZXJhdGVIYXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmluc2VydGVkLmhhcyhoYXNoKTtcclxuICB9XHJcbn1cclxuIl19