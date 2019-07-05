import React from 'react';

const TreeItem = ({ columns, data, linkVal, getDescendantProp }) => {
    return (
        <tr>
            <td>
                <div className="expand">
                    {linkVal}
                </div>
            </td>
            {
                columns.map((column, key) => {
                    return (
                        <td className="treeitem" key={key} >
                            {getDescendantProp(data, column.Value )}
                        </td>
                    );
                })
            }
        </tr>
    );
}

export default TreeItem;