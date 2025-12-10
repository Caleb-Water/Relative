// Example usage of domain models

import type { NodeModel } from '../domain/NodeModel/NodeModel';
import type { TagModel } from '../domain/TagModel/TagModel';
import type { LinkModel } from '../domain/LinkModel/LinkModel';
import type { ViewModel } from '../domain/ViewModel/ViewModel';
import type { GraphModel } from '../domain/GraphModel/GraphModel';
import type { NodeId, TagId, ViewId, GraphId } from '../domain/types';

// simple ids
const graphId: GraphId = 'graph-1';
const inboxTagId: TagId = 'tag-inbox';
const nodeAId: NodeId = 'node-a';
const nodeBId: NodeId = 'node-b';
const viewId: ViewId = 'view-main';

export const tags: TagModel[] = [
  {
    id: inboxTagId,
    name: 'Inbox',
    contents: 'Stuff to process',
  },
];

export const nodes: NodeModel[] = [
  {
    id: nodeAId,
    name: 'First node',
    contents: 'Hello Relative',
    tags: [inboxTagId],
  },
  {
    id: nodeBId,
    name: 'Second node',
    contents: 'Another idea',
    tags: [],
  },
];

export const links: LinkModel[] = [
  {
    id: 'link-a-b',
    name: 'relates to',
    contents: 'Example link',
    tags: [],
    source: nodeAId,
    target: nodeBId,
  },
];

export const view: ViewModel = {
  id: viewId,
  name: 'Main view',
  contents: 'Example view',
  data: {
    tagIds: [inboxTagId],
    nodeIds: [nodeAId, nodeBId],
  },
  locusmap: {
    nodelocusbyIds: {
      [nodeAId]: { x: 0, y: 0 },
      [nodeBId]: { x: 200, y: 100 },
    },
  },
};

export const graph: GraphModel = {
  id: graphId,
  name: 'Example graph',
  contents: 'Demo graph for development',
  viewIds: [viewId],
  defaultviewId: viewId,
};
