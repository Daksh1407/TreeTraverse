// components/Tree.js
import React, { useState } from 'react';
import TreeNode from './TreeNode';

const Tree = () => {
    const initialTreeData = {
        value: 1,
        children: []
    };

    const [treeData, setTreeData] = useState(initialTreeData);

    // Function to add a child node to the tree
    const addChildNode = () => {
        const newNodeValue = prompt('Enter the value for the new node:');
        if (newNodeValue) {
            const newNode = { value: parseInt(newNodeValue), children: [] };
            console.log('Adding new node:', newNode);
            setTreeData(prevTreeData => ({
                ...prevTreeData,
                children: [...prevTreeData.children, newNode]
            }));
        }
    };

    // Function to render tree nodes recursively
    const renderTreeNodes = (nodes) => {
        return nodes.map((node, index) => ( <
            TreeNode key = { index }
            value = { node.value }
            children = { node.children } > {
                node.children && node.children.length > 0 && ( <
                    div className = "children" > { renderTreeNodes(node.children) } < /div>
                )
            } <
            /TreeNode>
        ));
    };

    return ( <
        div className = "tree" >
        <
        button onClick = { addChildNode } > Add Child Node < /button> { renderTreeNodes([treeData]) } <
        /div>
    );
};

export default Tree;