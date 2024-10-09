import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      lastName: "Smith",
      firstName: "John",
      email: "john.smith@example.com",
      phone: "+1-202-555-0191",
      createdAt: "2023-01-15",
      verified: true,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      lastName: "Doe",
      firstName: "Jane",
      email: "jane.doe@example.com",
      phone: "+1-202-555-0192",
      createdAt: "2023-02-12",
      verified: true,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      lastName: "Johnson",
      firstName: "Michael",
      email: "michael.johnson@example.com",
      phone: "+1-202-555-0193",
      createdAt: "2023-03-10",
      verified: false,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      lastName: "Williams",
      firstName: "Emily",
      email: "emily.williams@example.com",
      phone: "+1-202-555-0194",
      createdAt: "2023-04-05",
      verified: true,
    },
    {
      id: 5,
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      lastName: "Brown",
      firstName: "James",
      email: "james.brown@example.com",
      phone: "+1-202-555-0195",
      createdAt: "2023-05-08",
      verified: false,
    },
    {
      id: 6,
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      lastName: "Jones",
      firstName: "Sarah",
      email: "sarah.jones@example.com",
      phone: "+1-202-555-0196",
      createdAt: "2023-06-11",
      verified: false,
    },
    {
      id: 7,
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      lastName: "Garcia",
      firstName: "David",
      email: "david.garcia@example.com",
      phone: "+1-202-555-0197",
      createdAt: "2023-07-13",
      verified: true,
    },
    {
      id: 8,
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      lastName: "Martinez",
      firstName: "Jessica",
      email: "jessica.martinez@example.com",
      phone: "+1-202-555-0198",
      createdAt: "2023-08-20",
      verified: true,
    },
    {
      id: 9,
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      lastName: "Hernandez",
      firstName: "Daniel",
      email: "daniel.hernandez@example.com",
      phone: "+1-202-555-0199",
      createdAt: "2023-09-01",
      verified: true,
    },
    {
      id: 10,
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      lastName: "Lopez",
      firstName: "Laura",
      email: "laura.lopez@example.com",
      phone: "+1-202-555-0100",
      createdAt: "2023-09-15",
      verified: true,
    },
    {
      id: 11,
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      lastName: "Wilson",
      firstName: "Kevin",
      email: "kevin.wilson@example.com",
      phone: "+1-202-555-0101",
      createdAt: "2023-09-20",
      verified: true,
    },
    {
      id: 12,
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      lastName: "Anderson",
      firstName: "Megan",
      email: "megan.anderson@example.com",
      phone: "+1-202-555-0102",
      createdAt: "2023-09-25",
      verified: true,
    },
    {
      id: 13,
      img: "https://randomuser.me/api/portraits/men/13.jpg",
      lastName: "Taylor",
      firstName: "Brian",
      email: "brian.taylor@example.com",
      phone: "+1-202-555-0103",
      createdAt: "2023-09-30",
      verified: true,
    },
    {
      id: 14,
      img: "https://randomuser.me/api/portraits/women/14.jpg",
      lastName: "Thomas",
      firstName: "Alyssa",
      email: "alyssa.thomas@example.com",
      phone: "+1-202-555-0104",
      createdAt: "2023-10-01",
      verified: true,
    },
    {
      id: 15,
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      lastName: "Jackson",
      firstName: "Joshua",
      email: "joshua.jackson@example.com",
      phone: "+1-202-555-0105",
      createdAt: "2023-10-05",
      verified: true,
    },
  ];

  app.get("/api/users", (req, res) => {
    res.json(users);
  });
  
  app.get("/api/users/:id", (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.json(user); // Perbaikan dari `res.jason` ke `res.json`
  });
  
  app.post("/api/users", (req, res) => {
    users.unshift(req.body);
    res.json(users);
  });
  
  app.delete("/api/users/:id", (req, res) => {
    users = users.filter((user) => user.id !== parseInt(req.params.id)); // Perbaikan dari `firlter` ke `filter`
    res.json("User Deleted!");
  });
  
  app.listen(8800, () => {
    console.log("Connected to backend.");
  });
