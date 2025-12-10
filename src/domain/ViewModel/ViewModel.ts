// Defining View Data Types

// importing global data types from /src/types.ts
import type {  NodeId, TagId, ViewId, NodeLocus } from '../types'

export interface ViewData {
    tagIds?: TagId[]
    nodeIds?:NodeId[]
}

export interface ViewLocusMap {
    nodelocusbyIds: Record<NodeId,NodeLocus>
}

export interface ViewModel {
    id: ViewId;
    name: string;
    contents?: string;
    data?:  ViewData;
    locusmap?: ViewLocusMap;
}
