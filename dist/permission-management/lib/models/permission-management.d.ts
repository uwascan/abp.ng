import { EventEmitter } from '@angular/core';
export declare namespace PermissionManagement {
    interface State {
        permissionRes: Response;
    }
    interface Response {
        entityDisplayName: string;
        groups: Group[];
    }
    interface Group {
        name: string;
        displayName: string;
        permissions: Permission[];
    }
    interface MinimumPermission {
        name: string;
        isGranted: boolean;
    }
    interface Permission extends MinimumPermission {
        displayName: string;
        parentName: string;
        allowedProviders: string[];
        grantedProviders: GrantedProvider[];
    }
    interface GrantedProvider {
        providerName: string;
        providerKey: string;
    }
    interface UpdateRequest {
        permissions: MinimumPermission[];
    }
    interface PermissionManagementComponentInputs {
        visible: boolean;
        readonly providerName: string;
        readonly providerKey: string;
        readonly hideBadges: boolean;
    }
    interface PermissionManagementComponentOutputs {
        readonly visibleChange: EventEmitter<boolean>;
    }
}
