/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<6ce23a6950eacf3f9cf686c0103fef79>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type useRefetchableFragmentNodeTest3Fragment$ref = any;
export type useRefetchableFragmentNodeTest2QueryVariables = {|
  nodeID: string,
  scale: number,
|};
export type useRefetchableFragmentNodeTest2QueryResponse = {|
  +node: ?{|
    +$fragmentRefs: useRefetchableFragmentNodeTest3Fragment$ref,
  |},
|};
export type useRefetchableFragmentNodeTest2Query = {|
  variables: useRefetchableFragmentNodeTest2QueryVariables,
  response: useRefetchableFragmentNodeTest2QueryResponse,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nodeID"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scale"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "nodeID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useRefetchableFragmentNodeTest2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useRefetchableFragmentNodeTest3Fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRefetchableFragmentNodeTest2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "scale",
                    "variableName": "scale"
                  }
                ],
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profile_picture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "uri",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b7be1b38d88ae12b71b07ddeba2141dc",
    "id": null,
    "metadata": {},
    "name": "useRefetchableFragmentNodeTest2Query",
    "operationKind": "query",
    "text": "query useRefetchableFragmentNodeTest2Query(\n  $nodeID: ID!\n  $scale: Int!\n) {\n  node(id: $nodeID) {\n    __typename\n    ...useRefetchableFragmentNodeTest3Fragment\n    id\n  }\n}\n\nfragment useRefetchableFragmentNodeTest2Fragment on User {\n  username\n}\n\nfragment useRefetchableFragmentNodeTest3Fragment on User {\n  id\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n  ...useRefetchableFragmentNodeTest2Fragment\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "72e18d7bc6bacad5c6cafb45e08e76ae";
}

module.exports = node;
