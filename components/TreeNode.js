import React from 'react';

const TreeNode = ({ value, children }) => {
    return ( <
            div className = "tree-node" >
            <
            span > { value } < /span> {
            children && ( <
                div className = "tree-children" > {
                    children.map((child, index) => ( <
                        TreeNode key = { index } {...child }
                        />
                    ))
                } <
                /div>
            )
        } <
        /div>
);
};

export default TreeNode;