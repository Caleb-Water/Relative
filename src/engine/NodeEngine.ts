// ' Create, Update, Delete ' Functions for Nodes

import type { GraphState } from '../domain/GraphState'
import type { NodeId, LinkId } from '../domain/types'
import type { NodeModel } from '../domain/NodeModel/NodeModel'
import type { LinkModel } from '../domain/LinkModel/LinkModel'
import { uuidV4 } from './IdDistributer'

// Create Node
export function createNode( graphState: GraphState, nodeModel: NodeModel ): GraphState { 

    const newNodeUUID = uuidV4() as NodeId;

    const newNodeModel = {

        ...nodeModel,
        id: newNodeUUID,

    } satisfies NodeModel;

    return {

        ...graphState,

        nodes: {

            ...graphState.nodes,
            [newNodeUUID]: newNodeModel,

        },

    } satisfies GraphState;



};

// Update Node
export function updateNode( graphState: GraphState, nodeModel: NodeModel ): GraphState {

    const fetchNodeID = nodeModel.id as NodeId;

    return {

        ...graphState,

        nodes: {

            ...graphState.nodes,
            [fetchNodeID]: nodeModel,

        },

    } satisfies GraphState;

};


// Delete Node (and all related links)

export function fetchRelatedLinks( graphstate: GraphState, nodeId: NodeId ): LinkId[] {

    const relatedLinks: LinkId[] = []

    for ( const [linkId, link] of Object.entries( graphstate.links ) as [LinkId, LinkModel][] ) {

        if ( link.source === nodeId || link.target === nodeId ) {

            relatedLinks.push( linkId as LinkId )
       
        }

    } 

    return relatedLinks satisfies LinkId[];

}

export function deleteNode( graphState: GraphState, nodeId: NodeId ): GraphState {

    const { [nodeId]:_, ...processedNodes } = graphState.nodes   

    const relatedLinks = fetchRelatedLinks(graphState, nodeId) 

    const processedLinks = { ...graphState.links }

    for (const linkId of relatedLinks) {

        delete processedLinks[linkId] 

    }

    return { 

        ...graphState,
        nodes: processedNodes,
        links: processedLinks

    } satisfies GraphState;

}