import { ElementRef, EventEmitter, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmationService } from '../../services/confirmation.service';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/button.component';
export declare type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
export declare class ModalComponent implements OnDestroy {
    private renderer;
    private confirmationService;
    private modalService;
    get visible(): boolean;
    set visible(value: boolean);
    get busy(): boolean;
    set busy(value: boolean);
    centered: boolean;
    modalClass: string;
    size: ModalSize;
    abpSubmit: ButtonComponent;
    abpHeader: TemplateRef<any>;
    abpBody: TemplateRef<any>;
    abpFooter: TemplateRef<any>;
    abpClose: ElementRef<any>;
    template: TemplateRef<any>;
    modalContent: ElementRef;
    abpButtons: any;
    readonly visibleChange: EventEmitter<boolean>;
    readonly init: EventEmitter<void>;
    readonly appear: EventEmitter<any>;
    readonly disappear: EventEmitter<any>;
    _visible: boolean;
    _busy: boolean;
    isModalOpen: boolean;
    isConfirmationOpen: boolean;
    destroy$: Subject<void>;
    private toggle$;
    get isFormDirty(): boolean;
    constructor(renderer: Renderer2, confirmationService: ConfirmationService, modalService: ModalService);
    private initToggleStream;
    private toggle;
    ngOnDestroy(): void;
    close(): void;
    listen(): void;
}
