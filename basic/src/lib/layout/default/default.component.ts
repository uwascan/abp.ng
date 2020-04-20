import {
    Component,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    AfterViewInit,
    OnInit,
    OnDestroy,
    ElementRef,
    Renderer2,
    Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationError, NavigationCancel } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { updateHostClass } from '@delon/util';
import { SettingsService } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { eLayoutType, AddReplaceableComponent } from '@abp/ng.core';
import { PageBarComponent } from '../../shared/components/page-bar/page-bar.component';
import { Store} from '@ngxs/store';

@Component({
    selector: 'layout-default',
    templateUrl: './default.component.html',
})
export class LayoutDefaultComponent implements OnInit, AfterViewInit, OnDestroy {

    static type = eLayoutType.application;
    private unsubscribe$ = new Subject<void>();
    @ViewChild('settingHost', { read: ViewContainerRef, static: true })
    private settingHost: ViewContainerRef;
    isFetching = false;

    constructor(
        private store:Store,
        router: Router,
        _message: NzMessageService,
        private resolver: ComponentFactoryResolver,
        private settings: SettingsService,
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private doc: any,
    ) {
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }

    private setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });

        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }

    ngAfterViewInit(): void {
        // Setting componet for only developer
        if (true) {
            setTimeout(() => {
                const settingFactory = this.resolver.resolveComponentFactory(SettingDrawerComponent);
                this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    }

    ngOnInit() {
        this.store.dispatch(new AddReplaceableComponent({ component: PageBarComponent, key: 'Core.PageBarComponent' }));
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => this.setClass());
        this.setClass();
    }

    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
