import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
];

console.log("profile[1]:", profile[1]);

const Example = () => {
  return (
    <div>
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      <Profile {...profile[1]} />
      <Profile />
    </div>
  );
};

export default Example;
