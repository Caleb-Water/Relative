// ' Create, Update, Delete ' Functions for Tags

import type { GraphState } from '../domain/GraphState'
import type { TagId, NodeId, LinkId } from '../domain/types'
import type { TagModel } from '../domain/TagModel/TagModel'
import type { NodeModel } from '../domain/NodeModel/NodeModel'
import type { LinkModel } from '../domain/LinkModel/LinkModel'
import { uuidV4 } from './IdDistributer'

// Create Tag