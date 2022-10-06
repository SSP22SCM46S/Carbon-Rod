import React, {useState, useEffect} from 'react';
import Link from 'next/link'
// import firebase from 'firebase.js'
const signin = () => {
    // const [user, setUser] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [hasAccount, setHasAccount] = useState(false);

    // const handlelogin = () => {
    //     firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email,password)
    // }
  return (
    <div>
           {/* <div class="absolute w-48 h-48 rounded-xl bg-[#64c297] -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div> */}
	<div class = "flex h-screen">
    <div class = "m-auto">
  <div class="py-20  px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer ">Sign In</h1>
		</div>
		<div class="space-y-4">
			<input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
    </div>
			<div class="text-center mt-6">
        <Link href= "/dashboard">
				<button class="py-3 w-64 text-xl text-white bg-[#64c297] rounded-2xl">Sign in</button>
        </Link>
				<p class="mt-4 text-sm">Dont't have an account? <span class="underline cursor-pointer"> Sign In</span>
				</p>
			</div>
		</div>
    </div>
    </div>
    </div>
  )
}

export default signin