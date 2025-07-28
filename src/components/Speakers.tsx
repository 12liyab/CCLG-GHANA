const Speakers = () => {
  const speakers = [
    {
      id: 1,
      image: "/lovable-uploads/27891561-1b7d-45f2-8069-2d32eeaf71d0.png",
      name: "Hon. Dr. Kwaku Afriyie"
    },
    {
      id: 2,
      image: "/lovable-uploads/b2782621-2642-431a-81ed-3d971178e9e4.png",
      name: "Prof. Kwamena Kwansah-Aidoo"
    },
    {
      id: 3,
      image: "/lovable-uploads/2400972c-e808-4212-87d6-a3a7939ca717.png",
      name: "Hon. Ursula Owusu-Ekuful"
    },
    {
      id: 4,
      image: "/lovable-uploads/4cf83158-2780-498c-8f41-a97d27bd1461.png",
      name: "Kofi Don-Agor: Convener"
    },
    {
      id: 5,
      image: "/lovable-uploads/4467bd90-7746-4d71-9531-cc927ca58584.png",
      name: "Hon. Dr. Emmanuel Marfo"
    },
    {
      id: 6,
      image: "/lovable-uploads/cd413421-ee9d-4ee4-8788-709f36a41be9.png",
      name: "Prof. Kwadwo Owusu"
    },
    {
      id: 7,
      image: "/lovable-uploads/5386cdb6-fb15-441a-aa5e-add1430a7728.png",
      name: "Dr. Nii Addo Bruce"
    },
    {
      id: 8,
      image: "/lovable-uploads/fb09fdca-6bf8-4149-840e-8ea01a708043.png",
      name: "Prof. Nana Ama Browne Klutse"
    },
    {
      id: 9,
      image: "/lovable-uploads/2c62e2c3-9bfd-48a3-aa49-a293b7178076.png",
      name: "Hon. Dr. Godfred Seidu Jasaw"
    },
    {
      id: 10,
      image: "/lovable-uploads/e6d50f20-d282-4766-8975-1ac9409f4fc0.png",
      name: "Prof. Isaac Abeku Blankson"
    },
    {
      id: 11,
      image: "/lovable-uploads/ec608ea5-3bd4-47c0-894d-a4ea8dbcb310.png",
      name: "Dr. Lawrencia Agyepong"
    },
    {
      id: 12,
      image: "/lovable-uploads/2e1a503a-a43a-480e-9fd4-be90e58c3e25.png",
      name: "Hon. Prof. Hamza Adam"
    },
    {
      id: 13,
      image: "/lovable-uploads/3d8901db-507a-452b-8e6a-7a2fb1151f01.png",
      name: "Dr. Maxwell Ampong"
    },
    {
      id: 14,
      image: "/lovable-uploads/58ce6e13-7d3a-410c-86af-bc408fa4590e.png",
      name: "Dr. Collins Gameli Hodoli"
    },
    {
      id: 15,
      image: "/lovable-uploads/8d6f5093-67e9-4ee4-a04f-7b3566aa38d3.png",
      name: "Okyeame Kwame The Activist"
    },
    {
      id: 16,
      image: "/lovable-uploads/db2e2fb6-7c74-4433-a57b-600f1e75d6be.png",
      name: "Dr. Antwi-Boasiako Amoah"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-background via-sage-green/5 to-earth-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-green mb-4">
            Our Distinguished Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the thought leaders, experts, and climate advocates who will share their insights at ACCCE 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-sage-green/5">
                <div className="absolute inset-0 bg-gradient-to-t from-earth-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.2)',
                  }}
                />
                <div className="absolute inset-0 ring-2 ring-earth-green/20 rounded-2xl group-hover:ring-earth-green/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-green/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white font-semibold text-sm md:text-base text-center">
                    {speaker.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;