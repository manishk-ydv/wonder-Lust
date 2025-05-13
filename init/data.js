const sampleListings = [
    
        {
          title: "Stylish Leather Jacket",
          description: "A premium leather jacket designed for comfort and style, perfect for chilly weather.",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 5999,
          location: "Delhi",
          country: "India"
        },
        {
          title: "Wireless Bluetooth Headphones",
          description: "Noise-cancelling Bluetooth headphones with a 20-hour battery life.",
          image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 3499,
          location: "Mumbai",
          country: "India"
        },
        {
          title: "Organic Green Tea",
          description: "Pure, organic green tea leaves for a refreshing and healthy drink.",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 499,
          location: "Bangalore",
          country: "India"
        },
        {
          title: "Luxury Wrist Watch",
          description: "A sophisticated wristwatch with stainless steel and leather strap, perfect for formal occasions.",
          image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 14999,
          location: "Kolkata",
          country: "India"
        },
        {
          title: "Running Shoes",
          description: "Comfortable and durable running shoes, designed for maximum performance and support.",
          image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 2999,
          location: "Chenai",
          country: "India"
        },
        {
          title: "Smartphone 5G",
          description: "Latest smartphone with 5G technology, stunning display, and high-end camera features.",
          image:"https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 24999,
          location: "Hyderabad",
          country: "India"
        },
        {
          title: "Gaming Laptop",
          description: "High-performance gaming laptop with a powerful graphics card and 16GB RAM.",
          image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 74999,
          location: "Pune",
          country: "India"
        },
        {
          title: "Electric Kettle",
          description: "Compact and quick electric kettle, perfect for boiling water, tea, or coffee.",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1299,
          location: "Surat",
          country: "India"
        },
        {
          title: "Bluetooth Speaker",
          description: "Portable Bluetooth speaker with crystal clear sound and bass.",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1999,
          location: "Jaipur",
          country: "India"
        },
        {
          title: "Portable Charger",
          description: "Fast-charging portable power bank with 10000mAh capacity, ideal for traveling.",
          image: "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1499,
          location: "Ahmedabad",
          country: "India"
        },
        {
          title: "Smart Fitness Band",
          description: "Track your fitness goals with this smart band, including heart rate and step counting.",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1999,
          location: "Lucknow",
          country: "India"
        },
        {
          title: "Digital Camera",
          description: "Capture high-quality photos and videos with this advanced digital camera.",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 20999,
          location: "Delhi",
          country: "India"
        },
        {
          title: "Air Purifier",
          description: "Improve air quality with this advanced air purifier for your home or office.",
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 8999,
          location: "Gurgaon",
          country: "India"
        },
        {
          title: "Smart TV 4K",
          description: "Watch your favorite content in stunning 4K resolution with this smart TV.",
          image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 34999,
          location: "Noida",
          country: "India"
        },
        {
          title: "Leather Wallet",
          description: "Premium leather wallet with a sleek design and ample storage space.",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 1599,
          location: "Chandigarh",
          country: "India"
        },
        {
          title: "Camera Drone",
          description: "Fly and capture aerial views with this user-friendly camera drone.",
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 24999,
          location: "Bangalore",
          country: "India"
        },
        {
          title: "Designer Sunglasses",
          description: "Stylish sunglasses that offer UV protection and enhance your fashion statement.",
          image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 2599,
          location: "Mumbai",
          country: "India"
        },
        {
          title: "Fitness Treadmill",
          description: "Compact treadmill for home workouts, with adjustable speed and incline.",
          image: "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 18999,
          location: "Kolkata",
          country: "India"
        },
        {
          title: "Smart Home Speaker",
          description: "Voice-controlled smart speaker with integrated smart home features.",
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 3499,
          location: "Chennai",
          country: "India"
        }
      ];
      module.exports = {data: sampleListings };
      
      
      
