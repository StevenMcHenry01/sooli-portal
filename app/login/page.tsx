import Messages from "./messages";

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 py-5 sm:py-36 sm:max-w-md justify-center gap-2 mx-auto">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>
        <p className="text-foreground mx-auto pb-2">or</p>
        <button
          formAction="/auth/sign-up-provider"
          className="border border-gray-700 rounded px-4 py-2 text-foreground mb-2"
        >
          Sign in with Google
        </button>
        <Messages />
      </form>
    </div>
  );
}
