
import { useEffect, useState } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/contacts`
      );
      setContacts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contacts");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Contact Messages</h1>
        <p className="text-gray-600 mt-2">
          Total messages: {contacts.length}
        </p>
      </div>

      {contacts.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-500">No contact messages yet</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(contact.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    contact.status === "new"
                      ? "bg-blue-100 text-blue-600"
                      : contact.status === "read"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {contact.status.toUpperCase()}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-sm font-medium text-gray-800">
                    {contact.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="text-sm font-medium text-gray-800">
                    {contact.location}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Subject</p>
                  <p className="text-sm font-medium text-gray-800">
                    {contact.subject}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-2">Message</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {contact.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;