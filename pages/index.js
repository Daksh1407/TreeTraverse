// pages/index.js
import React from 'react';
import Tree from '../components/Tree';

const HomePage = () => {
    // Mock data for tree structure (replace with actual fetched data)
    const treeData = [{
        value: 1,
        children: [{
                value: 2,
                children: [
                    { value: 4 },
                    { value: 5 }
                ]
            },
            {
                value: 3,
                children: [
                    { value: 6 },
                    { value: 7 }
                ]
            }
        ]
    }];

    return ( <
        div className = "container" >
        <
        h1 > Tree Structure < /h1> <
        Tree treeData = { treeData }
        /> <
        /div>
    );
};

export default HomePage;