// Defining Graph Data Types

// importing global data types from /src/types.ts
import type { ViewId, GraphId } from '../types'

export interface GraphModel {
    id: GraphId;
    name: string;
    contents?: string;
    viewIds?: ViewId[];
    defaultviewId: ViewId;
}
