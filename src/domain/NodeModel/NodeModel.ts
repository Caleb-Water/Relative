// Defining Node Data Types

// importing global data types from /src/types.ts
import type { NodeId, TagId } from '../types'

export interface NodeModel {
    id: NodeId;
    name: string;
    contents?: string;
    tags?: TagId[];
};

