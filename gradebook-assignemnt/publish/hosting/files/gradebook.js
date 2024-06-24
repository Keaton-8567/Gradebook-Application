import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { handleLogin } from "../login/getting_data.js";

export default function() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingRowId, setEditingRowId] = useState(null);

    const columns = [
        {
            name: "User",
            selector: (row) => row.user,
            cell : (row) => (editingRowId === row.user ? <input value={row.user} onChange={(e) => updateRowValue(e, "user")} /> : row.user),
            width: "150px"
        },
        {
            name: "First Name",
            selector: (row) => row.first_name,
            cell : (row) => (editingRowId === row.first_name ? <input value={row.first_name} onChange={(e) => updateRowValue(e,  "first_name")} /> : row.first_name),
        },
        {
            name: "last Name",
            selector: (row) => row.last_name,
            cell: (row) => (editingRowId === row.id ? <input value={row.last_name} onChange={(e) => updateRowValue(e, "last_name")} /> : row.last_name),
        },
        {
            name: "Email",
            selector: (row) => row.email,
            cell: (row) => (editingRowId === row.email ? <input value={row.email} onChange={(e) => updateRowValue(e, "email")} /> : row.email),
            width: "230px"
        },
        {
            name: "Task 1 Sub 3",
            selector: (row) => row.sub_assignment_3,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_3} onChange={(e) => updateRowValue(e, "sub_assignment_3")} /> : row.sub_assignment_3),
            width: "105px"
        },
        {
            name: "Task 1 Sub 4",
            selector: (row) => row.sub_assignment_4,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_4} onChange={(e) => updateRowValue(e, "sub_assignment_4")} /> : row.sub_assignment_4),
            width: "105px"
        },
        {
            name: "Task 1 Sub 5",
            selector: (row) => row.sub_assignment_5,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_5} onChange={(e) => updateRowValue(e, "sub_assignment_5")} /> : row.sub_assignment_5),
            width: "105px"
        },
        {
            name: "Task 1 Sub 6",
            selector: (row) => row.sub_assignment_6,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_6} onChange={(e) => updateRowValue(e, "sub_assignment_6")} /> : row.sub_assignment_6),
            width: "105px"
        },
        {
            name: "Task 1 Sub 7",
            selector: (row) => row.sub_assignment_7,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_7} onChange={(e) => updateRowValue(e, "sub_assignment_7")} /> : row.sub_assignment_7),
            width: "105px"
        },
        {
            name: "Task 1 Sub 8",
            selector: (row) => row.sub_assignment_8,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_8} onChange={(e) => updateRowValue(e, "sub_assignment_8")} /> : row.sub_assignment_8),
            width: "105px"
        },
        {
            name: "Task 1 Sub 9",
            selector: (row) => row.sub_assignment_9,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_9} onChange={(e) => updateRowValue(e, "sub_assignment_9")} /> : row.sub_assignment_9),
            width: "105px"
        },
        {
            name: "Task 1 Sub 10",
            selector: (row) => row.sub_assignment_10,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_10} onChange={(e) => updateRowValue(e, "sub_assignment_10")} /> : row.sub_assignment_10),
            width: "105px"
        },
        {
            name: "Task 1 Sub 11",
            selector: (row) => row.sub_assignment_11,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_11} onChange={(e) => updateRowValue(e, "sub_assignment_11")} /> : row.sub_assignment_11),
            width: "105px"
        },
        {
            name: "Task 1 Sub 12",
            selector: (row) => row.sub_assignment_12,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_12} onChange={(e) => updateRowValue(e, "sub_assignment_12")} /> : row.sub_assignment_12),
            width: "105px"
        },
        {
            name: "Task 1 Sub 13",
            selector: (row) => row.sub_assignment_13,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_13} onChange={(e) => updateRowValue(e, "sub_assignment_13")} /> : row.sub_assignment_13),
            width: "105px"
        },
        {
            name: "Task 1 Sub 14",
            selector: (row) => row.sub_assignment_14,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_14} onChange={(e) => updateRowValue(e, "sub_assignment_14")} /> : row.sub_assignment_14),
            width: "105px"
        },
        {
            name: "Task 1 Sub 15",
            selector: (row) => row.sub_assignment_15,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_15} onChange={(e) => updateRowValue(e, "sub_assignment_15")} /> : row.sub_assignment_15),
            width: "105px"
        },
        {
            name: "Task 1 Sub 16",
            selector: (row) => row.sub_assignment_16,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_16} onChange={(e) => updateRowValue(e, "sub_assignment_16")} /> : row.sub_assignment_16),
            width: "105px"
        },
        {
            name: "Task 1 Sub 17",
            selector: (row) => row.sub_assignment_17,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_17} onChange={(e) => updateRowValue(e, "sub_assignment_17")} /> : row.sub_assignment_17),
            width: "105px"
        },
        {
            name: "Task 1 Sub 18",
            selector: (row) => row.sub_assignment_18,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_18} onChange={(e) => updateRowValue(e, "sub_assignment_18")} /> : row.sub_assignment_18),
            width: "105px"
        },
        {
            name: "Task 1 Sub 19",
            selector: (row) => row.sub_assignment_19,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_19} onChange={(e) => updateRowValue(e, "sub_assignment_19")} /> : row.sub_assignment_19),
            width: "105px"
        },
        {
            name: "Task 1 Sub 20",
            selector: (row) => row.sub_assignment_20,
            cell: (row) => (editingRowId === row.id ? <input value={row.sub_assignment_20} onChange={(e) => updateRowValue(e, "sub_assignment_20")} /> : row.sub_assignment_20),
            width: "105px"
        },
        {
            name: "Total",
            selector: (row) => row.total,
            cell: (row) => (editingRowId === row.total ? <input value={row.total} onChange={(e) => updateRowValue(e, "total")} /> : row.total),
            width: "105px"
        },
        {
            name: "Actions",
            cell: (row) => (
                <div>
                    {editingRowId === row.id ? (
                        <button onClick={() => handleSave(row.id)}>Save</button>
                    ) : (
                        <button onClick={() => setEditingRowId(row.id)}>Edit</button>
                    )}
                </div>
            ),
        },
    ];

    useEffect(() => {
        fetchTableData();
    }, []);

    async function fetchTableData() {
        setLoading(true);

        const users = await handleLogin();
        console.log(users);
        setData(users["students"]);
        setLoading(false);
    }

    const updateRowValue = (event, field) => {
        const updatedData = [...data];
        const index = updatedData.findIndex((row) => row.id === editingRowId);
        updatedData[index][field] = event.target.value;
        setData(updatedData);
    };

    const handleSave = (id) => {
        console.log("Saving edited row:", data.find((row) => row.id === id));
        setEditingRowId(null); 
    };

    return (
        <div className='Gradebook'>
            <DataTable 
                title="Data"
                columns={columns}
                data={data}
                progressPending={loading}
                editRow={editingRowId}
                saveRow={handleSave}
            />
        </div>
    )
}
/*
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { handleLogin } from "../login/getting_data.js";

export default function Gradebook() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingRowId, setEditingRowId] = useState(null);

    const columns = [
        {
            name: "User",
            selector: "user",
            cell: (row) => (
                editingRowId === row.id ?
                <input value={row.user} onChange={(e) => updateRowValue(e, row.id, "user")} /> :
                row.user
            ),
            width: "150px"
        },
        {
            name: "First Name",
            selector: "first_name",
            cell: (row) => (
                editingRowId === row.id ?
                <input value={row.first_name} onChange={(e) => updateRowValue(e, row.id, "first_name")} /> :
                row.first_name
            ),
        },
        {
            name: "Last Name",
            selector: "last_name",
            cell: (row) => (
                editingRowId === row.id ?
                <input value={row.last_name} onChange={(e) => updateRowValue(e, row.id, "last_name")} /> :
                row.last_name
            ),
        },
        {
            name: "Email",
            selector: "email",
            cell: (row) => (
                editingRowId === row.id ?
                <input value={row.email} onChange={(e) => updateRowValue(e, row.id, "email")} /> :
                row.email
            ),
            width: "230px"
        },
        // Add other columns similarly
        {
            name: "Actions",
            cell: (row) => (
                <div>
                    {editingRowId === row.id ? (
                        <button onClick={() => handleSave(row.id)}>Save</button>
                    ) : (
                        <button onClick={() => setEditingRowId(row.id)}>Edit</button>
                    )}
                </div>
            ),
        },
    ];

    useEffect(() => {
        fetchTableData();
    }, []);

    async function fetchTableData() {
        setLoading(true);
        const users = await handleLogin();
        console.log(users);
        setData(users.students);
        setLoading(false);
    }

    const updateRowValue = (event, id, field) => {
        const updatedData = data.map((row) => {
            if (row.id === id) {
                return { ...row, [field]: event.target.value };
            }
            return row;
        });
        setData(updatedData);
    };

    const handleSave = (id) => {

        console.log("Saving edited row:", data.find((row) => row.id === id));
        setEditingRowId(null);
        // Perform save operation or API call here
    };

    return (
        <div className='Gradebook'>
            <DataTable 
                title="Data"
                columns={columns}
                data={data}
                progressPending={loading}
            />
        </div>
    );
}
*/