const Projects = [
  {
    name: "Project Name",
    description: "Description",
    image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
    link: "link"
  },
  {
    name: "Project Name",
    description: "Description",
    image: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
    link: "link"
  }
];

export default function Project() {
  return (
    <main>
      <section className="flex justify-center items-center mt-5 mx-5 lg:mx-48">
        <div className="Animated-Fadein flex flex-wrap justify-around">
          {Projects.map((item) => (
            <div className="w-64 m-3 bg-gray-950 rounded-md p-4 drop-shadow-xl">
              <div className="flex justify-center items-center mb-2">
                <img
                  src={item.image}
                  alt={item.name} className="h-48 w-48 object-cover object-center" />
              </div>
              <h1 className="text-md lg:text-md text-white"><a href={item.link}>{item.name}</a></h1>
              <h1 className="text-sm lg:text-sm text-white">{item.description}</h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
