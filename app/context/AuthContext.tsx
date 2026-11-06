//
// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "~/db/supabase";
//
// const AuthContext = createContext(null);
//
// export function AuthProvider( {children}) {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         let mounted = true;
//
//         async function loadUser() {
//             const {
//                 data: {user},
//                 error,
//             } = await supabase.auth.getUser();
//
//             if (!mounted) {
//                 return;
//             }
//
//             if (error) {
//                 console.error(error);
//                 setUser(null);
//             } else {
//                 setUser(user);
//             }
//
//             setLoading(false);
//         }
//
//         loadUser();
//
//         const {
//             data: {subscription},
//         } = supabase.auth.onAuthStateChange((_event, session) => {
//             setUser(session?.user ?? null);
//             setLoading(false);
//         });
//
//         return () => {
//             mounted = false;
//             subscription.unsubscribe();
//         };
//     }, []);
//
//     async function pSignup(email, password) {
//         const {data, error} = await supabase.auth.signUp({
//             email,
//             password
//         });
//
//         if (error) { throw error; }
//
//         return data;
//     }
//
//     async function pSignin(email, password) {
//         const {data, error} = await supabase.auth.signInWithPassword({
//             email,
//             password
//         });
//
//         if (error) { throw error; }
//
//         return data;
//     }
//
//     async function pSignout() {
//         const {error} = await supabase.auth.signOut();
//         if (error) { throw error; }
//     }
//
//     return (
//         <AuthContext.Provider
//             value={{ user, loading, pSignup, pSignin, pSignout }}
//             >
//             {children}
//         </AuthContext.Provider>
//     );
// }
//
// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth requires AuthProvider");
//     }
//     return context;
// }
