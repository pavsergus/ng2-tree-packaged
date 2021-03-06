import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TreeService } from './tree.service';
import * as TreeTypes from './tree.types';
import { NodeCheckedEvent, NodeUncheckedEvent } from './tree.events';
import { Tree } from './tree';
import { TreeController } from './tree-controller';
export declare class TreeComponent implements OnInit, OnChanges, OnDestroy {
    private treeService;
    private static EMPTY_TREE;
    treeModel: TreeTypes.TreeModel;
    settings: TreeTypes.Ng2TreeSettings;
    nodeCreated: EventEmitter<any>;
    nodeRemoved: EventEmitter<any>;
    nodeRenamed: EventEmitter<any>;
    nodeSelected: EventEmitter<any>;
    nodeUnselected: EventEmitter<any>;
    nodeMoved: EventEmitter<any>;
    nodeExpanded: EventEmitter<any>;
    nodeCollapsed: EventEmitter<any>;
    loadNextLevel: EventEmitter<any>;
    nodeChecked: EventEmitter<NodeCheckedEvent>;
    nodeUnchecked: EventEmitter<NodeUncheckedEvent>;
    menuItemSelected: EventEmitter<any>;
    tree: Tree;
    rootComponent: any;
    template: any;
    private subscriptions;
    constructor(treeService: TreeService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    getController(): TreeController;
    getControllerByNodeId(id: number | string): TreeController;
    ngOnDestroy(): void;
}
