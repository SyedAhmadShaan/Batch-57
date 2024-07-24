import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link href={"/dashboard/settings"}>Settings</Link>
      <a href="/dashboard/analytics">Analytics</a>
      <Link href={"/name"}>Client Component</Link>
      <div>
        {`When you use the target="_blank" attribute in an anchor tag, the linked page will open in a new browser tab or window. This behavior is useful when you want to keep the original page open for the user while allowing them to explore other links.`}

        <a href="https://github.com/panaverse/learn-nextjs/tree/main"
          className="font-bold" 
          target="_self" 
        >
          Panaverse NextJs Link
        </a>
      </div>
      <Link
        href={
          "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating"
        }
        className="font-bold"
        target="_blank"
      >
        Next Js Official DOC
      </Link>

      <h1 className="font-bold">Common Values:</h1>
        <ul className="grid justify-items-center ...">
        <li>_self: Opens the link in the same tab (default behavior).</li>
        <li>_blank: Opens the link in a new tab or window.</li>
        <li>_parent: Opens the link in the parent frame.</li>
        </ul>
    
    </main>
  );
}