var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];

function outputObjects(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].first_name, arr[i].last_name);
    }
}

outputObjects(students);

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
};

function studentsAndInstructors(userObj){
    for(var key in userObj){
        var count = 1;
        for(var i = 0; i < userObj[key].length; i++){
            var characters = userObj[key][i].first_name.length + userObj[key][i].last_name.length;
            var outputString = count + ' - ' + userObj[key][i].first_name + ' ' + userObj[key][i].last_name + ' - ' + characters;
            console.log(outputString);
            count++;
        }
    }
}

studentsAndInstructors(users);