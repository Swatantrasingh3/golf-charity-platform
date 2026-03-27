import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Golf Charity Platform</h1>
      <p>Play • Win • Support Charity</p>

      <Link href="/signup">Signup</Link> |{" "}
      <Link href="/login">Login</Link>
    </div>
  );
}
