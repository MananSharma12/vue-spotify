import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { useFirebaseAuth } from 'vuefire'

export const useAuth = () => {
    const auth = useFirebaseAuth()!
    const db = getFirestore()

    const registerUser = async (userData: {
        email: string
        password: string
        name: string,
        age: string,
        country: string,
    }) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
        )

        await setDoc(doc(db, 'users', userCredential.user.uid), {
            name: userData.name,
            email: userData.email,
            age: userData.age,
            country: userData.country,
        })

        return userCredential
    }

    const loginUser = async (email: string, password: string) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = async () => {
        navigateTo('/')
        return await signOut(auth)
    }

    return {
        registerUser,
        loginUser,
        logoutUser
    }
}