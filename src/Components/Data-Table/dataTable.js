import React, { useState, useMemo } from "react";

//Hooks
import useFetch from "../../Hooks/useFetch";

//Components
import TableHeaders from "./table-headers";
import TableRows from "./table-row";

const Table = () => {
    const [error, data, loading] = useFetch("https://jsonplaceholder.typicode.com/comments");// <- initialValue
    const [key, setKey] = useState(null);
    const [order, setOrder] = useState({key: "asc"});

    const columnSort = useMemo(() => {
        if (!key) {
            return data;
        }
        let newData = data.sort((a, b) => (order[key] === "asc" ? a[key] > b[key] : b[key] > a[key]));
        console.log("TCL: columnSort -> order[key]", order[key])

        //setOrder(order[key] === "asc" ? "desc" : "asc");
        return newData;
    }, [data, key]);

    if (error) {
        return (
            <div>
                {error}
            </div>
        );
    }
    if (loading) {
        return (
            <div id="preload-wrapper">
                <div id="loader"></div>
            </div>
        );
    }

    const TableContent = data && columnSort.map((item, key) => {
        return (
            <TableRows
                key={key}
                columns={columns}
                data={item}
            />
        );
    })

    return (
        <table className="dataTable">
            <TableHeaders columns={columns} columnSort={setKey} />
            {TableContent}
        </table>
    );
}

export default Table;


const columns = [
    {
        Header: "Id",
        Value: "id",
        sortOn: "id",
        childItem: null,
    }, {
        Header: "Name",
        Value: "name",
        sortOn: "name",
        childItem: null,
    }, {
        Header: "Email",
        Value: "email",
        sortOn: "email",
        childItem: null,
    }, {
        Header: "postId",
        Value: "postId",
        sortOn: "postId",
        childItem: null,
    }, {
        Header: "Comment",
        Value: "body",
        sortOn: "bodys",
        childItem: [
            {
                Value: "body",
            },
        ]
    },
]