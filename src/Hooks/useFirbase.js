import { createUserWithEmailAndPassword ,onAuthStateChanged,getAuth, signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from "../Firebase/Firebase.initalize";
initailizeAuthentication();
const useFirbase = () => {
    // take user
  const [user, setuser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  // google
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true)
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setuser(result);
      window.location.reload();
      window.location.replace('service');
    })
    .finally(()=> setIsLoading(false));
  };
  // logout
  const logout = () => {
    setIsLoading(true)

    signOut(auth)
    .then(() => { })
    .finally(()=> setIsLoading(false));
  };
  //ovserver
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        setuser(user);
        } else {
         setuser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
  },[])

  // take email and pass
   const handleEmail = (e) =>{
     setEmail(e.target.value)
   }
   const handlePassword = (e) =>{
     setPassword(e.target.value)
   }
   const handleRegistration = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setError('');
    })
    .catch((error) => {
     setError(error.message);
    });
   }
  
  return {
    user,
    signInUsingGoogle,
    logout,
    isLoading,
    handleEmail,
    handlePassword,
    handleRegistration
  };
};
export default useFirbase;