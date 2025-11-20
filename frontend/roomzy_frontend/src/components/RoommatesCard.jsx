// RoommatesCard.jsx
import React, { useContext } from "react";
import { MapPin, Home, DollarSign, User, Send } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

export default function RoommatesCard({ roommates }) {
  const { user } = useContext(AuthContext);

  // ⭐ Remove the logged-in user from list
  const filteredRoommates = roommates.filter(
    (r) => r.email !== user?.email
  );

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">

      {filteredRoommates.length === 0 && (
        <p className="text-center text-green-600 font-semibold col-span-full text-lg">
          No other roommates available 💚
        </p>
      )}

      {filteredRoommates.map((roommate, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white p-5 space-y-4"
        >
          {/* Name */}
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">{roommate.name}</h2>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{roommate.location}</span>
          </div>

          {/* Rent */}
          <div className="flex items-center space-x-2 text-gray-600">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span>{roommate.rent} / month</span>
          </div>

          {/* Place */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Home className="w-4 h-4 text-purple-600" />
            <span>{roommate.place}</span>
          </div>

          {/* ⭐ Send Message Button */}
          <button
            className="w-full mt-3 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-xl shadow-md hover:bg-green-600 active:scale-95 transition-all"
            onClick={() => alert(`Sending message to ${roommate.name}`)}
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </div>
      ))}
    </div>
  );
}