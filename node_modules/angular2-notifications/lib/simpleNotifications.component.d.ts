import { OnInit, OnDestroy } from "@angular/core";
import { Notification } from "./notification";
import { NotificationsService } from "./notifications.service";
export declare class SimpleNotificationsComponent implements OnInit, OnDestroy {
    private _service;
    constructor(_service: NotificationsService);
    notifications: Notification[];
    options: any;
    private listener;
    private lastOnBottom;
    private maxStack;
    private preventLastDuplicates;
    private preventDuplicates;
    private timeOut;
    private maxLength;
    private clickToClose;
    private showProgressBar;
    private pauseOnHover;
    private theClass;
    private rtl;
    private expand;
    private lastNotificationCreated;
    private onCreate;
    private onDestroy;
    ngOnInit(): void;
    defaultBehavior(value: any): void;
    add(item: any): void;
    block(item: any): boolean;
    attachChanges(): void;
    buildEmit(notification: Notification, to: boolean): {
        createdOn: Date;
        type: string;
        id: string;
    };
    cleanSingle(id: string): void;
    ngOnDestroy(): void;
}
