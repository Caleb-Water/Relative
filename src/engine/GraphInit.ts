// Function for Creating & Initializing Graph

import type { GraphId, ViewId } from '../domain/types'
import type { GraphModel } from '../domain/GraphModel/GraphModel'
import type { ViewData, ViewLocusMap, ViewModel } from "../domain/ViewModel/ViewModel";
import type { GraphState } from '../domain/graphstate';
import { UUIDv4 } from './IdDistributer';

export function CreateInitGraph(): GraphState {

    const newGraphUUID = UUIDv4() as GraphId;
    const newViewUUID = UUIDv4() as ViewId;

    const newGraphModel = {

        id: newGraphUUID,
        name: 'New Graph',
        defaultviewId: newViewUUID,

    } satisfies GraphModel;

    const defaultViewdata = {
        tagIds: [],
        nodeIds: [],
    } satisfies ViewData;

    const defaultViewlocusmap = {
        nodelocusbyIds: {},
    } satisfies ViewLocusMap;
    
    const defaultViewModel = {
        id: newViewUUID, 
        name: "Default", 
        contents: "Default View", 
        data: defaultViewdata, 
        locusmap: defaultViewlocusmap
    } satisfies ViewModel;

    const state = { 

        graph: { id: newGraphUUID, model: newGraphModel, },
        tags: {},
        nodes: {},
        links: {},
        views: {
            [newViewUUID]: defaultViewModel
        },

    } satisfies GraphState;
    
    return state;
};



