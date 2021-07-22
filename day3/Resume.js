// Resume in JSON format

var Resume = {
    PersonalDetails: {
        name: "Manav",
        age: 24,
        DOB: "22/Feb/2022",
        Gender: "Male",
        Mobile_No : 9654218700,
        Email_Id : "manavjain083@gmail.com",
        Nationality: "Indian"
    },
    Education_Qualification: {
        SSC:{
            percentage: 90,
            grade: "A2",
            School: "LFPS",
            Board: "CBSE",
            End_Date: "May,2012"
        },
        HSC: {
            percentage: 79.2,
            School: "LFPS",
            Board: "CBSE",
            End_Date: "May,2015"

        },
        Graduation:{
            College_Name: "Galgotias University",
            Course: "B.Tech in CSE",
            percentage: 83,
            End_Date: "May,2019"
        }

    },
    Skills:["C programming","C++","Python","MySql","HTML5","CSS"],
    Work_Experience:{
        Internship:{
            Start_date: "Feb/2019",
            End_Date: "May/2019",
            Company:"Infosys Ltd.",
            Location:"Mysore",
            Role:"System Engineer Trainee"
        },
        Full_Time:{
            Start_Date:"Aug/2019",
            End_Date: "MAy/2020",
            Company:"Infosys Ltd.",
            Location:"Pune",
            Role: "System Engineer"

        }
    },
    Projects:{
        Internship:{
            Name: "Comikazi",
            Duration: "4 Months",
            Skills: ["C#","DBMS","Entity Framework Core",".Net MVC","HTML","CSS"],
            About: "Worked in a team of 6 and build a web application using the above mentioned technologies. It was an application to sell, publish, and read comic books."
        },
        college_project:{
            Name: "Dieting app",
            Duration: "15 Days",
            Subject: "Algorithms",
            Skills: "C programming",
            About:"Build a program that take weight, age, gender, height from user and give them required amount of calories with the amount of macronutrients(carbs,protein,fats) using Knapsack Algorithm"
        }
    },
    Interests:["Gymming","Cooking","Photography","Badminton","Table Tennis","Travelling"]
    
};

console.log(Resume);
