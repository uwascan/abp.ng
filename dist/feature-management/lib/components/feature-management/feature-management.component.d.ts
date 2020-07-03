import { EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureManagement } from '../../models/feature-management';
import { FormGroup } from '@angular/forms';
export declare class FeatureManagementComponent implements FeatureManagement.FeatureManagementComponentInputs, FeatureManagement.FeatureManagementComponentOutputs {
    private store;
    providerKey: string;
    providerName: string;
    protected _visible: any;
    get visible(): boolean;
    set visible(value: boolean);
    readonly visibleChange: EventEmitter<boolean>;
    features$: Observable<FeatureManagement.Feature[]>;
    modalBusy: boolean;
    form: FormGroup;
    constructor(store: Store);
    openModal(): void;
    getFeatures(): void;
    buildForm(features: any): void;
    save(): void;
}
