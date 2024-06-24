import axios from "axios";

let student_data = "no data";
let saved_usernmae = "Prem.Kattel"//"no usernmae";
let saved_password = "COSC-1301"//"no password";

function set_username_and_password(new_username, new_password) {
    saved_usernmae = new_username;
    saved_password = new_password;
}

async function performValidation() {
    try {
        const response = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/application-0-slsgzid/endpoint/Login', {
            params: {
                username: saved_usernmae,
                password: saved_password
            }
        });

        return response.data; // Resolve the promise with the data

    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for further handling (optional)
    }
}

export const handleLogin = async (event) => {
    let data_reseved = (await performValidation()).split(/[:}{,"]/);
    let ah = [];
    let dict = {};
    let students = [];
    let is_number = false;

    for (let i in data_reseved) {
        try {
            let number = parseInt(data_reseved[i]);
            if (number <= 100) {
                is_number = true;
            }
            
        } catch (error) {

        }

        if (data_reseved[i].length >= 4 || is_number === true) {
            ah.push(data_reseved[i]);
            is_number = false;
        }
    }

    dict[ah[0]] = ah[1]
    ah.shift();
    ah.shift();

    dict[ah[0]] = {};
    ah.shift();
    
    let student = {};

    for (let i in ah) {
        if (ah.length !== 0) { //&& i < 10
            ah.shift();
            ah.shift();

            if (ah[0] === "password") {
                ah.shift();
                ah.shift();
            }

            if (ah[0] === "assignments") {
                //student[ah[0]] = { // student[ah[0]]4
                student[ah[2]] = ah[3];
                student[ah[4]] = ah[5];
                student[ah[6]] = ah[7];
                student[ah[8]] = ah[9];
                student[ah[10]] = ah[11];
                student[ah[12]] = ah[13];
                student[ah[14]] = ah[15];
                student[ah[16]] = ah[17];
                student[ah[18]] = ah[19];
                student[ah[20]] = ah[21];
                student[ah[22]] = ah[23];
                student[ah[24]] = ah[25];
                student[ah[26]] = ah[27];
                student[ah[28]] = ah[29];
                student[ah[30]] = ah[31];
                student[ah[32]] = ah[33];
                student[ah[34]] = ah[35];
                student[ah[36]] = ah[37];
                student[ah[38]] = ah[39];
                student[ah[40]] = ah[41];
                student[ah[42]] = ah[43];/*
                    [ah[44]]: {
                        [ah[45]] : ah[46],
                        [ah[47]] : ah[48],
                        [ah[49]] : ah[50],
                        [ah[51]] : ah[52],
                        [ah[53]] : ah[54],
                        [ah[55]] : ah[56],
                        [ah[57]] : ah[58],
                        [ah[59]] : ah[60],
                        [ah[61]] : ah[52],
                        [ah[63]] : ah[64],
                        [ah[65]] : ah[66],
                        [ah[67]] : ah[68],
                        [ah[69]] : ah[70],
                        [ah[71]] : ah[72],
                        [ah[73]] : ah[74],
                        [ah[75]] : ah[76],
                        [ah[77]] : ah[78],
                        [ah[79]] : ah[80],
                        [ah[81]] : ah[82],
                        [ah[83]] : ah[84],
                        [ah[85]] : ah[86]
                    },
                    [ah[87]]: {
                        [ah[88]] : ah[89],
                        [ah[90]] : ah[91],
                        [ah[92]] : ah[93],
                        [ah[94]] : ah[95],
                        [ah[96]] : ah[97],
                        [ah[98]] : ah[99],
                        [ah[100]] : ah[101],
                        [ah[102]] : ah[103],
                        [ah[104]] : ah[105],
                        [ah[106]] : ah[107],
                        [ah[108]] : ah[109],
                        [ah[110]] : ah[111],
                        [ah[112]] : ah[113],
                        [ah[114]] : ah[115],
                        [ah[116]] : ah[117],
                        [ah[118]] : ah[119],
                        [ah[120]] : ah[121],
                        [ah[122]] : ah[123],
                        [ah[124]] : ah[125],
                        [ah[126]] : ah[127],
                        [ah[128]] : ah[129]
                    },
                    [ah[130]]: {
                        [ah[131]] : ah[132],
                        [ah[133]] : ah[134],
                        [ah[135]] : ah[136],
                        [ah[137]] : ah[138],
                        [ah[139]] : ah[140],
                        [ah[141]] : ah[142],
                        [ah[143]] : ah[144],
                        [ah[145]] : ah[146],
                        [ah[147]] : ah[148],
                        [ah[149]] : ah[150],
                        [ah[151]] : ah[152],
                        [ah[153]] : ah[154],
                        [ah[155]] : ah[156],
                        [ah[157]] : ah[158],
                        [ah[159]] : ah[160],
                        [ah[161]] : ah[162],
                        [ah[163]] : ah[164],
                        [ah[165]] : ah[166],
                        [ah[167]] : ah[168],
                        [ah[169]] : ah[170],
                        [ah[171]] : ah[172]
                    },
                    [ah[173]]: {
                        [ah[174]] : ah[175],
                        [ah[176]] : ah[177],
                        [ah[178]] : ah[179],
                        [ah[180]] : ah[181],
                        [ah[182]] : ah[183],
                        [ah[184]] : ah[185],
                        [ah[186]] : ah[187],
                        [ah[188]] : ah[189],
                        [ah[190]] : ah[191],
                        [ah[192]] : ah[193],
                        [ah[194]] : ah[195],
                        [ah[196]] : ah[197],
                        [ah[198]] : ah[199],
                        [ah[200]] : ah[201],
                        [ah[202]] : ah[203],
                        [ah[204]] : ah[205],
                        [ah[206]] : ah[207],
                        [ah[208]] : ah[209],
                        [ah[210]] : ah[211],
                        [ah[212]] : ah[213],
                        [ah[214]] : ah[215]
                    },
                    [ah[216]] : ah[217]*/
                //}

                for (let j = 0;j<=217;j++)
                    ah.shift();

            } else {
                    student[ah[0]] = ah[1];
            } 

            if (typeof student["user"] !== 'undefined')
                if (Object.keys(student).length === 25) {
                    students.push(student);
                    student = {};
                }
        }
    }
    
    dict["students"] = students;
    return dict
    console.log(dict);
    //console.log(ah)
};

//set_username_and_password("Prem.Kattel", "COSC-1301");
//student_data = handleLogin();s

/*
POC

let stored_username = "not set";
let stored_password = "not set";

function set_username_and_password(username, password) {
    stored_username = username;
    stored_password = password;
}

console.log("Old Username : " + stored_username);
console.log("Old Password : " + stored_password);

console.log();
let new_username = "Baata";
let new_password = "Nunya";

set_username_and_password(new_username, new_password);

console.log("New Username : " + stored_username);
console.log("New Password : " + stored_password);*/