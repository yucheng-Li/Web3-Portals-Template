import Link from 'next/link'

export default function Home() {
	return (
		<div>
			Home
			<Link href="/dashboard">Dashboard</Link>
		</div>
	)
}
