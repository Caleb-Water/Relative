// Global Data Types Definition

// Domain Data Types

// ID
export type TagId = string;
export type NodeId = string;
export type LinkId = string;
export type ViewId = string;
export type GraphId = string;

// Tag types
export type TagType = 'B'|'A'|'R'|'D'

// View types
export type ViewType = 'M'|'T'

// Node Locus
export interface NodeLocus {
    x: number;
    y: number;
};