import React from 'react';

//Hooks
import useFetch from "../../Hooks/useFetch";
//Components
import TreeItem from "./tree-item";

const TableRows = ({ data, columns }) => {

    /*const IsInternalIcon = data.Icon.IsInternalIcon;

    let linkVal;
    if (IsInternalIcon) {
        linkVal = <img src={"/Content/icons/" + data.IconText + "_x16.png"} />;
    } else {
        linkVal = <img src={"/Content/icons/" + data.Icon.FileType + "_x16.png"} />;
    }

    let expandVal;
    if (data.IsContainer && data.Collapse) {
        expandVal = " + ";
    } else if (data.IsContainer && !data.Collapse) {
        expandVal = " - ";
    } else {
        expandVal = null;
    }
    const treeItems = !data.Items ? loading && !data.Collapse : treeData.Items !== null && data.IsContainer !== null && !data.Collapse ? data.Items.map((record, key) => {
        return (
            <TreeItem columns={columns} data={record} IsInternalIcon={IsInternalIcon} linkVal={linkVal} key={key} getDescendantProp={getDescendantProp}>
                {
                    columns.map((column, key) => {
                        return (
                            <td className="treeitem" key={key}>
                                {getDescendantProp(record, column.Value)}
                            </td>
                        );
                    })
                }
            </TreeItem>
        );
    }) : null*/
    return (
        <tbody>
            <tr className="tableRow">
                {
                    columns.map((column, key) => {
                        return (
                            <td className="treeitem" key={key} >
                                {getDescendantProp(data, column.Value)}
                            </td>
                        );
                    })
                }
            </tr>
        </tbody>
    );
}

export default TableRows;

const getDescendantProp = (obj, desc) => {
    var arr = desc.split('.');
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
}
