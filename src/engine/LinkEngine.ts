// ' Create, Update, Delete ' Functions for Links

import type { GraphState } from '../domain/GraphState'
import type { LinkId } from '../domain/types' 
import type { LinkModel } from '../domain/LinkModel/LinkModel'
import { uuidV4 } from './IdDistributer'

// Create Link
export function createLink( graphState: GraphState, linkModel: LinkModel ): GraphState {

    const newLinkUUID = uuidV4() as LinkId;

    const newLinkModel = {

        ...linkModel,
        id: newLinkUUID,
    
    } satisfies LinkModel;

    return {
        
        ...graphState,

        links: { 

            ...graphState.links,
            [newLinkUUID]: newLinkModel,

        }

    } satisfies GraphState;

}

// Update Link
export function updateLink( graphState: GraphState, linkModel: LinkModel ): GraphState {

    const fetchLinkID = linkModel.id as LinkId

    return {

        ...graphState,

        links: {

            ...graphState.links,
            [fetchLinkID]: linkModel

        }

    } satisfies GraphState;

}

// Delete Link
export function deleteLink( graphState: GraphState, linkId: LinkId ): GraphState {

    const { [linkId]: _, ...processedLinks } = graphState.links 

    return {

        ...graphState,
        links: processedLinks
        
    } satisfies GraphState;

}