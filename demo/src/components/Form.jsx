import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const { getAllUsers, createUser } = useContext(AppContext);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) return;

    try {
      await createUser({ name, email });
      setName("");
      setEmail("");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Submitted Data
          </h3>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {users?.map((user, index) => (
              <div
                key={user._id || index}
                className="p-4 bg-gray-100 rounded-lg flex flex-col shadow-sm"
              >
                <span className="font-semibold text-gray-900">
                  {user.name}
                </span>
                <span className="text-gray-600 text-sm">
                  {user.email}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Form;
