// Defining Graph Data

import type { GraphId } from './types';
import type { TagId } from './types';
import type { NodeId } from './types';
import type { LinkId } from './types';
import type { ViewId } from './types';

import type { NodeModel } from './NodeModel/NodeModel';
import type { LinkModel } from './LinkModel/LinkModel';
import type { TagModel } from './TagModel/TagModel';
import type { ViewModel } from './ViewModel/ViewModel';
import type { GraphModel } from './GraphModel/GraphModel';

interface GraphData {
    id: GraphId;
    model: GraphModel
};

export interface GraphState {
    graph: GraphData;
    tags: Record<TagId, TagModel>;
    nodes: Record<NodeId, NodeModel>;
    links: Record<LinkId, LinkModel>;
    views: Record<ViewId, ViewModel>;
};

