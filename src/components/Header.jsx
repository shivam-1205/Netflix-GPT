import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptSearch } from "../redux/gptSlice";
import { changeLanguage } from "../redux/langSlice";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { auth } from "../utils/fireBase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.ShowGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    //toggle Gpt Search
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    //language change
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen py-4 px-4 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center bg-opacity-50 sm:bg-blue-800 md:bg-green-700 bg-black md:">
      <img
        className="w-44 hover:scale-105 transition-transform duration-300"
        src={LOGO_URL}
        alt="Logo"
      />

      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="p-2 m-3 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 my-2 rounded-lg  bg-purple-500"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            src={user.photoURL}
            alt="User Avatar"
          />
          <div className="text-white">
            <p className="font-semibold">{user.displayName}</p>
            <p className="text-sm text-gray-300">{user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md shadow-lg transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
