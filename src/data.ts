export const menu = [
    {
      id: 1,
      title: "Main",
      listItem: [
        {
          id: 1,
          title: "Homepage",
          icon: "/home.svg",
          url: "/"
        },
        {
          id: 2,
          title: "Profile",
          icon: "/user.svg",
          url: "/users/1"
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItem: [
        {
          id: 1,
          title: "Users",
          icon: "user.svg",
          url: "/users"
        },
        {
          id: 2,
          title: "Products",
          icon: "product.svg",
          url: "/products"
        },
        {
          id: 3,
          title: "Orders",
          icon: "order.svg",
          url: "/orders"
        },
        {
          id: 4,
          title: "Posts",
          icon: "post2.svg",
          url: "/posts"
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItem: [
        {
          id: 1,
          title: "Elements",
          icon: "element.svg",
          url: "/"
        },
        {
          id: 2,
          title: "Notes",
          icon: "note.svg",
          url: "/"
        },
        {
          id: 3,
          title: "Forms",
          icon: "form.svg",
          url: "/"
        },
        {
          id: 4,
          title: "Calendar",
          icon: "calender.svg",
          url: "/"
        },
        
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItem: [
        {
          id: 1,
          title: "Settings",
          icon: "setting.svg",
          url: "/"
        },
        {
          id: 2,
          title: "Backups",
          icon: "backup.svg",
          url: "/"
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItem: [
        {
          id: 1,
          title: "Charts",
          icon: "chart.svg",
          url: "/"
        },
        {
          id: 2,
          title: "Logs",
          icon: "log.svg",
          url: "/"
        },
      ],
    },
  ];
  

  export const topDealUsers = [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/1.jpg", // Gambar pengguna 1
        uname: "JohnDoe",
        email: "john.doe@example.com",
        amount: 120.50,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/women/1.jpg", // Gambar pengguna 2
        uname: "JaneSmith",
        email: "jane.smith@example.com",
        amount: 250.75,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/men/2.jpg", // Gambar pengguna 3
        uname: "MikeJohnson",
        email: "mike.johnson@example.com",
        amount: 310.00,
      },
      {
        id: 4,
        img: "https://randomuser.me/api/portraits/women/2.jpg", // Gambar pengguna 4
        uname: "SaraConnor",
        email: "sara.connor@example.com",
        amount: 150.25,
      },
      {
        id: 5,
        img: "https://randomuser.me/api/portraits/men/3.jpg", // Gambar pengguna 5
        uname: "ChrisEvans",
        email: "chris.evans@example.com",
        amount: 90.00,
      },
    ];
  
    export const chartBoxUser = {
      color: "#8884d8",
      icon: "/userIcon.svg",
      title: "Total Users",
      number: "11.238",
      dataKey: "users",
      percentage: 45,
      chartData: [
        {name: "Sun", users: 400 },
        {name: "Mon", users: 600 },
        {name: "Tue", users: 500 },
        {name: "Wed", users: 700 },
        {name: "Thu", users: 400 },
        {name: "Fri", users: 500 },
        {name: "Sat", users: 450 },
      ],
    };
    export const chartBoxProduct = {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Total Products",
      number: "238",
      dataKey: "products",
      percentage: 21,
      chartData: [
        {name: "Sun", products: 400 },
        {name: "Mon", products: 600 },
        {name: "Tue", products: 500 },
        {name: "Wed", products: 700 },
        {name: "Thu", products: 400 },
        {name: "Fri", products: 500 },
        {name: "Sat", products: 450 },
      ],
    };
    export const chartBoxRevenue = {
      color: "teal",
      icon: "/revenueIcon.svg",
      title: "Total Revenue",
      number: "$56.432",
      dataKey: "revenue",
      percentage: -12,
      chartData: [
        {name: "Sun", revenue: 400 },
        {name: "Mon", revenue: 600 },
        {name: "Tue", revenue: 500 },
        {name: "Wed", revenue: 700 },
        {name: "Thu", revenue: 400 },
        {name: "Fri", revenue: 500 },
        {name: "Sat", revenue: 450 },
      ],
    };
    export const chartBoxConversion = {
      color: "gold",
      icon: "/conversionIcon.svg",
      title: "Total Ratio",
      number: "2.6",
      dataKey: "ratio",
      percentage: 12,
      chartData: [
        {name: "Sun", ratio: 400 },
        {name: "Mon", ratio: 600 },
        {name: "Tue", ratio: 500 },
        {name: "Wed", ratio: 700 },
        {name: "Thu", ratio: 400 },
        {name: "Fri", ratio: 500 },
        {name: "Sat", ratio: 450 },
      ],
    };


    export const barChartBoxRevenue ={
      title: "Profit Earned",
      color: "#8884d8",
      dataKey: "profit",
      chartData: [
        {
          name: "Sun",
          profit: 4000,
        },
        {
          name: "Mon",
          profit: 3000,
        },
        {
          name: "Tue",
          profit: 2000,
        },
        {
          name: "Wed",
          profit: 2780,
        },
        {
          name: "Thu",
          profit: 1890,
        },
        {
          name: "Fri",
          profit: 2390,
        },
        {
          name: "Sat",
          profit: 3490,
        },
      ],  
  };
    export const barChartBoxVisit ={
      title: "Total Visit",
      color: "#FF8042",
      dataKey: "visit",
      chartData: [
        {
          name: "Sun",
          visit: 4000,
        },
        {
          name: "Mon",
          visit: 3000,
        },
        {
          name: "Tue",
          visit: 2000,
        },
        {
          name: "Wed",
          visit: 2780,
        },
        {
          name: "Thu",
          visit: 1890,
        },
        {
          name: "Fri",
          visit: 2390,
        },
        {
          name: "Sat",
          visit: 3490,
        },
      ],  
  };

  export const userRows = [
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
  

  export const products = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_laptop.jpg",
      title: "Laptop",
      color: "Silver",
      producer: "TechCorp",
      price: 999.99,
      createdAt: "2023-09-10",
      inStock: true,
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Smartphone_icon_2015.png",
      title: "Smartphone",
      color: "Black",
      producer: "MobileInc",
      price: 799.99,
      createdAt: "2023-08-22",
      inStock: true,
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Headphones_icon.svg",
      title: "Headphones",
      color: "Red",
      producer: "AudioMax",
      price: 199.99,
      createdAt: "2023-07-15",
      inStock: false,
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Book_font_awesome.svg",
      title: "Programming Book",
      color: "Blue",
      producer: "BookWorld",
      price: 29.99,
      createdAt: "2023-06-30",
      inStock: true,
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Camera-icon.svg",
      title: "Camera",
      color: "Black",
      producer: "CamPro",
      price: 499.99,
      createdAt: "2023-05-18",
      inStock: true,
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tablet_icon.png",
      title: "Tablet",
      color: "White",
      producer: "GadgetPro",
      price: 349.99,
      createdAt: "2023-04-22",
      inStock: false,
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Smart_watch_icon.svg",
      title: "Smartwatch",
      color: "Black",
      producer: "TimeTech",
      price: 149.99,
      createdAt: "2023-03-12",
      inStock: true,
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Nintendo_Game_Boy_Classic.png",
      title: "Gaming Console",
      color: "White",
      producer: "GameCorp",
      price: 399.99,
      createdAt: "2023-02-25",
      inStock: true,
    },
    {
      id: 9,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Computer_keyboard_icon.svg",
      title: "Mechanical Keyboard",
      color: "RGB",
      producer: "KeyMasters",
      price: 129.99,
      createdAt: "2023-01-10",
      inStock: true,
    },
    {
      id: 10,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Printer_icon.svg",
      title: "Printer",
      color: "Gray",
      producer: "PrintTech",
      price: 89.99,
      createdAt: "2022-12-05",
      inStock: false,
    },
  ];

  export const singleUser = {
        id: 1,
        title: "User One",
        img: "https://picsum.photos/200/200?random=1",
        info: {
            username: "userone",
            fullname: "User One Fullname",
            email: "userone@example.com",
            phone: "+1234567890",
            status: "active",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#8884d8" },
                { name: "clicks", color: "#82ca9d" }
            ],
            data: [
                { name: "Jan", visits: 4000, clicks: 2400 },
                { name: "Feb", visits: 3000, clicks: 1398 },
                { name: "Mar", visits: 2000, clicks: 9800 },
                { name: "Apr", visits: 2780, clicks: 3908 },
                { name: "May", visits: 1890, clicks: 4800 },
                { name: "Jun", visits: 2390, clicks: 3800 },
                { name: "Jul", visits: 3490, clicks: 4300 

                },
            ],
        },
            activities: [
                { text: "User logged in", time: "1 month ago" },
                { text: "User updated profile", time: "1 month ago" },
                { text: "User made a purchase", time: "1 month ago" 
                  
                },
            ]
        }
  

  export const singleProduct = {
        id: 1,
        title: "PS 4",
        img: "https://picsum.photos/200/200?random=1",
        info: {
            productId: "userone",
            color: "white",
            price: "$250",
            producer: "Sony",
            export: "Japan",
        },
        chart: {
            dataKeys: [
                { name: "visits", color: "#8884d8" },
                { name: "clicks", color: "#82ca9d" }
            ],
            data: [
                { 
                  name: "Jan", 
                  visits: 4000, 
                  clicks: 2400 
                },
                { 
                  name: "Feb", 
                  visits: 3000, 
                  clicks: 1398 
                },
                { 
                  name: "Mar", 
                  visits: 2000, 
                  clicks: 9800 
                },
                { 
                  name: "Apr", 
                  visits: 2780, 
                  clicks: 3908 
                },
                { 
                  name: "May", 
                  visits: 1890, 
                  clicks: 4800 
                },
                { 
                  name: "Jun", 
                  visits: 2390, 
                  clicks: 3800 
                },
                { 
                  name: "Jul", 
                  visits: 3490, 
                  clicks: 4300 
                },
            ],
        },
            activities: [
                { 
                  text: "dhymas beli", 
                  time: "1 month ago"
                },
                { 
                  text: "dhymas beli", 
                  time: "1 month ago" 
                },
                { 
                  text: "dhymas beli", 
                  time: "1 month ago" 
                },
            ]
        }
    
   
  
  
  