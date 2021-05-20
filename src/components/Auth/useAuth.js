import React from "react";
import firebase from "../../firebase/firebase";

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("login successfull");
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    console.log(authUser);
    return () => unsubscribe();
  }, []);

  return authUser;
}

export default useAuth;
