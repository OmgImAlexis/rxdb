import { RxJsonSchema, PouchSettings, RxDocument, RxLocalDocument } from './';
import { RxCollectionBase } from '../rx-collection';
export interface KeyFunctionMap {
    [key: string]: Function;
}
export interface NumberFunctionMap {
    [key: number]: Function;
}
export interface RxCollectionCreator {
    name: string;
    schema: RxJsonSchema;
    pouchSettings?: PouchSettings;
    migrationStrategies?: NumberFunctionMap;
    autoMigrate?: boolean;
    statics?: KeyFunctionMap;
    methods?: KeyFunctionMap;
    attachments?: KeyFunctionMap;
    options?: any;
}
export interface MigrationState {
    done: boolean;
    total: number;
    handled: number;
    success: number;
    deleted: number;
    percent: number;
}
export declare type RxCollectionHookCallback<RxDocumentType, OrmMethods> = (data: RxDocumentType, instance: RxDocument<RxDocumentType, OrmMethods>) => void | Promise<void> | any;
export declare type RxCollectionHookNoInstance<RxDocumentType, OrmMethods> = (data: RxDocumentType) => void | Promise<void> | any;
export declare type RxCollectionHookCallbackNonAsync<RxDocumentType, OrmMethods> = (data: RxDocumentType, instance: RxDocument<RxDocumentType, OrmMethods>) => void | any;
export declare type RxCollectionHookNoInstanceCallback<RxDocumentType, OrmMethods> = (data: RxDocumentType, instance: RxCollection) => Promise<void> | void | any;
export declare type RxCollection<RxDocumentType = any, OrmMethods = {}, StaticMethods = {
    [key: string]: any;
}> = RxCollectionBase<RxDocumentType, OrmMethods> & RxCollectionGenerated<RxDocumentType, OrmMethods> & StaticMethods;
export interface RxCollectionGenerated<RxDocumentType = any, OrmMethods = {}> {
    preInsert(fun: RxCollectionHookNoInstanceCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    preSave(fun: RxCollectionHookCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    preRemove(fun: RxCollectionHookCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    postInsert(fun: RxCollectionHookCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    postSave(fun: RxCollectionHookCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    postRemove(fun: RxCollectionHookCallback<RxDocumentType, OrmMethods>, parallel: boolean): void;
    postCreate(fun: RxCollectionHookCallbackNonAsync<RxDocumentType, OrmMethods>): void;
    insertLocal(id: string, data: any): Promise<RxLocalDocument<RxCollection<RxDocumentType, OrmMethods>>>;
    upsertLocal(id: string, data: any): Promise<RxLocalDocument<RxCollection<RxDocumentType, OrmMethods>>>;
    getLocal(id: string): Promise<RxLocalDocument<RxCollection<RxDocumentType, OrmMethods>>>;
    awaitPersistence(): Promise<void>;
}
