// Defining Tag Data Types

// importing global data types from /src/types.ts
import type {  TagId } from '../types'

export interface TagModel {
    id: TagId;
    name: string;
    contents?: string;
};
