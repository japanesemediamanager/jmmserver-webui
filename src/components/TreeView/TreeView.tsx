import React from 'react';
import TreeNode from './TreeNode';

class TreeView extends React.Component<{}> {
  render() {
    return (
      <div className="treeview w-full">
        <ul className="list-group">
          <TreeNode
            nodeId={0}
            level={1}
            Path="Shoko Server"
          />
        </ul>
      </div>
    );
  }
}

export default TreeView;
