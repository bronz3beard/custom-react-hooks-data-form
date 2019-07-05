import React from "react";

//Hooks
import useWindowWidth from "../../Hooks/useWindowWidth";

const TableHeaders = ({ columns, columnSort }) => {
    const width = useWindowWidth();

    if (width > 760) {
        return (
            <tbody>
                <tr className="header-tr">
                    {
                        columns.map((column, key) => {
                            return (
                                <th key={key} className={column.Value} onClick={() => columnSort(column.sortOn)}>
                                    {column.Header}
                                </th>
                            );
                        })
                    }
                </tr>
            </tbody>
        );
    } else {
        return (<div />);
    }
}

export default TableHeaders;