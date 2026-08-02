const lucas = {
  firstName: "Lucas",
  lastName: "Inocencio",
  email: "lucas@mail.com",
  address: {
    country: "Brazil",
    city: "Brasilia",
  },
};

console.log({ lucas });

const mateus = { ...lucas };
mateus.firstName = "Mateus";
mateus.lastName = "Oliveira";

mateus.address.city = "Rio de Janeiro";

console.log({ mateus });
console.log({ lucas });
