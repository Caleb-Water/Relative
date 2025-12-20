// Function for Creating & Initializing Graph

import type { GraphId, ViewId } from '../domain/types'
import type { GraphModel } from '../domain/GraphModel/GraphModel'
import type { ViewData, ViewLocusMap, ViewModel } from "../domain/ViewModel/ViewModel";
import type { GraphState } from '../domain/GraphState';
import { uuidV4 } from './IdDistributer';

export function createInitGraph(): GraphState {

    const newGraphUUID = uuidV4() as GraphId;
    const newViewUUID = uuidV4() as ViewId;

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



