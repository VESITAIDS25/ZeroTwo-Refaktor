import * as React from "react";
import firebase from "firebase/app";


const FirebaseAuthContext =
  React.createContext();

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const value = { user };

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export { FirebaseAuthProvider };

function useFirebaseAuth() {
    const context = React.useContext(FirebaseAuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context.user;
  }
  
  export { FirebaseAuthProvider, useFirebaseAuth };
