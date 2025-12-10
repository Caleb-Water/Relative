// Defining Link Data Types

// importing global data types from /src/types.ts
import type { NodeId, LinkId, TagId } from '../types'


export interface LinkModel {
    id: LinkId;
    name?: string;
    contents?: string;
    tags?: TagId[];
    source: NodeId;
    target: NodeId;
};
