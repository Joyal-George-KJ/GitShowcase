export default function Profile({ params }: { params: { username: string } }) {
    return <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold">@{params.username}'s Profile</h1>
      <p className="mt-2 text-muted-foreground">Here’s where their projects and info will show up.</p>
    </main>
;
}
